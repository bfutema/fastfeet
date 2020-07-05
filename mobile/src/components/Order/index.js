import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Steps,
  Line,
  TitleArea,
  Title,
  Step,
  Dot,
  StepText,
  Informations,
  DateInfo,
  LabelDate,
  Date,
  CityInfo,
  LabelCity,
  City,
  Details,
  ButtonText,
} from './styles';

export default function Order() {
  return (
    <Container>
      <TitleArea>
        <Icon name="truck" size={22} color="#7D40E7" />
        <Title>Encomenda 01</Title>
      </TitleArea>
      <Line />
      <Steps>
        <Step>
          <Dot />
          <StepText>Aguardando Retirada</StepText>
        </Step>
        <Step>
          <Dot />
          <StepText>Retirada</StepText>
        </Step>
        <Step>
          <Dot />
          <StepText>Entregue</StepText>
        </Step>
      </Steps>
      <Informations>
        <DateInfo>
          <LabelDate>Data</LabelDate>
          <Date>14/01/2020</Date>
        </DateInfo>
        <CityInfo>
          <LabelCity>Cidade</LabelCity>
          <City>Diadema</City>
        </CityInfo>
        <Details>
          <TouchableOpacity>
            <ButtonText>Ver detalhes</ButtonText>
          </TouchableOpacity>
        </Details>
      </Informations>
    </Container>
  );
}
