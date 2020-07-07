import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RNCamera } from 'react-native-camera';

import Background from '~/components/Background';

import api from '~/services/api';

import { WhiteBackground, Content, CameraArea, SubmitButton } from './styles';

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: 34,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    // margin: 20,
  },
});

export default function ConfirmDeliver({ navigation }) {
  const orderId = navigation.getParam('id');

  const deliveryManId = useSelector((state) => state.auth.deliveryManId);

  const [signatureId, setSignatureId] = useState(1);

  const cameraRef = useRef();

  async function handleDeliverOrder() {
    await api.put(`deliverymans/${deliveryManId}/deliveries/${orderId}`, {
      signature_id: signatureId,
    });

    navigation.navigate('Dashboard');
  }

  async function takePicture(camera) {
    /*
      Eu segui o tutorial da rocketseat onde ensina a fazer upload de
      diversos arquivos que vem da camera, mas nenhuma das tentativas
      deram certo para o meu caso, minha requisição fica com status
      'skipped' e não realiza o envio para o backend, testei outras
      libs (react-native-fetch-blob) para fazer upload mas sem sucesso,
      com base no post da rocket eu tentei enviar usando formData porém
      a requisição nem chega no backend, e quando uso o JSON.stringify
      ele até chega no server porém com os dados nulos.

      Link de referência usada: https://blog.rocketseat.com.br/react-native-upload-imagem/

      Percebi que a lib react-native-camera salva a imagem no cache da
      aplicação, notei isso quando renderizei uma Image do react-native
      em tela e a imagem realmente estava salva também tentei buscar essa
      imagem do cache para realizar o upload para o servidor mas também
      sem sucesso, tentei utilizar libs que trabalham com imagens no cache
      mas nenhuma conseguiu ler essa imagem que o react-native-camera gera
      no cache :( Infelizmente minha aplicação mobile não ficará 100% completa.

      Gostaria muito que a Rocketseat fizesse um vídeo falando sobre isso
      e como solucionar este problema, afinal, usar a camera foi simples
      o complicado foi enviar essa imagem para o server backend em node
      utilizando o multer.

      Devido a este problema eu fiz um mock com o deliveryManId = 1
     */

    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);

    const formData = new FormData();

    formData.append('file', {
      uri: data.uri.replace('file://', ''),
      type: 'image/jpeg',
      originalname: 'nome.jpeg',
      filename: 'test.jpeg',
    });

    // await api.post('files', formData);
  }

  return (
    <Background>
      <WhiteBackground />
      <Content>
        <CameraArea>
          <RNCamera
            ref={cameraRef}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permissão para usar a câmera',
              message: 'Nós precisamos de sua permissão para utilizar a câmera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          >
            {({ camera }) => (
              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}
              >
                <Text style={{ fontSize: 14 }}>SNAP</Text>
              </TouchableOpacity>
            )}
          </RNCamera>
        </CameraArea>
        <SubmitButton onPress={handleDeliverOrder}>Enviar</SubmitButton>
      </Content>
    </Background>
  );
}

ConfirmDeliver.navigationOptions = {
  title: 'Confirmar entrega',
};

ConfirmDeliver.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
