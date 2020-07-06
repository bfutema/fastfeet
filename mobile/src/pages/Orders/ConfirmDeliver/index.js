/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Camera, { RNCamera } from 'react-native-camera';
import * as RNFS from 'react-native-fs';

import Background from '~/components/Background';

import api from '~/services/api';

import {
  WhiteBackground,
  Content,
  Card,
  CameraArea,
  SubmitButton,
} from './styles';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default function ConfirmDeliver({ navigation }) {
  const orderId = navigation.getParam('id');

  const deliveryManId = useSelector((state) => state.auth.deliveryManId);

  const [signatureId, setSignatureId] = useState(1);
  const [image, setImage] = useState();

  const ref = useRef();
  const cameraRef = useRef();

  async function handleDeliverOrder() {
    const response = await api.put(
      `deliverymans/${deliveryManId}/deliveries/${orderId}`,
      { signature_id: signatureId }
    );

    navigation.navigate('Dashboard');
  }

  async function takePicture(camera) {
    const options = { quality: 0.5, base64: false };
    const data = await camera.takePictureAsync(options);

    const formData = new FormData();

    formData.append('file', {
      uri: data.uri.replace('file://', ''),
      type: 'image/jpeg',
      originalname: 'nome.jpeg',
      filename: 'test.jpeg',
    });

    const response = await api.post('files', formData);

    // console.tron.log(response);
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
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          >
            {({ camera, status, recordAudioPermissionStatus }) => {
              if (status !== 'READY') return <PendingView />;
              return (
                <View
                  style={{
                    flex: 0,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}
                >
                  <TouchableOpacity
                    onPress={() => takePicture(camera)}
                    style={styles.capture}
                  >
                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
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
