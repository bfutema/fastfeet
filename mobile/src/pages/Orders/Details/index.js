/* eslint-disable react/prop-types */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MAIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/Background';

import {
  WhiteBackground,
  Content,
  Card,
  TitleArea,
  Title,
  Info,
  Label,
  Text,
  DatesInfo,
  Actions,
  ButtonContent,
  ButtonText,
} from './styles';

export default function Details({ navigation }) {
  function handleNavigateToNewProblem() {
    navigation.navigate('NewProblem');
  }

  function handleNavigateToProblems() {
    navigation.navigate('Problems');
  }

  function handleNavigateToConfirmDeliver() {
    navigation.navigate('ConfirmDeliver');
  }

  return (
    <Background>
      <WhiteBackground />
      <Content>
        <Card>
          <TitleArea>
            <FAIcon name="truck" size={20} color="#7D40E7" />
            <Title>Informações da entrega</Title>
          </TitleArea>
          <View>
            <Info>
              <Label>Destinatário</Label>
              <Text>Ludwing van Beethoven</Text>
            </Info>
            <Info>
              <Label>Endereço de entrega</Label>
              <Text>Rua Beethoven, 1729, Diadema - SP, 09960-580</Text>
            </Info>
            <Info>
              <Label>Produto</Label>
              <Text>Yamaha SX7</Text>
            </Info>
          </View>
        </Card>
        <Card>
          <TitleArea>
            <MCIcon name="calendar" size={20} color="#7D40E7" />
            <Title>Situação da entrega</Title>
          </TitleArea>
          <View>
            <Info>
              <Label>Status</Label>
              <Text>Pendente</Text>
            </Info>
            <DatesInfo>
              <Info>
                <Label>Data de retirada</Label>
                <Text>14 / 01 / 2020</Text>
              </Info>
              <Info>
                <Label>Data de retirada</Label>
                <Text>--/--/--</Text>
              </Info>
            </DatesInfo>
          </View>
        </Card>
        <Actions>
          <TouchableOpacity onPress={handleNavigateToNewProblem}>
            <ButtonContent>
              <MAIcon name="highlight-off" size={20} color="#E74040" />
              <ButtonText>Informar Problema</ButtonText>
            </ButtonContent>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNavigateToProblems}>
            <ButtonContent>
              <MCIcon name="information-outline" size={20} color="#E7BA40" />
              <ButtonText>Visualizar Problemas</ButtonText>
            </ButtonContent>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNavigateToConfirmDeliver}>
            <ButtonContent>
              <MCIcon name="check-circle-outline" size={20} color="#7D40E7" />
              <ButtonText>Confirmar Entrega</ButtonText>
            </ButtonContent>
          </TouchableOpacity>
        </Actions>
      </Content>
    </Background>
  );
}

Details.navigationOptions = {
  title: 'Detalhes da encomenda',
};
