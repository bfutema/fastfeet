/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  TitleArea,
  Title,
  StepsInfo,
  Steps,
  Line,
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

export default function Order({ data, width, handleNavigate }) {
  const dateParsed = useMemo(
    () =>
      format(parseISO(data.createdAt), 'dd/MM/yyyy', {
        locale: pt,
      }),
    [data.createdAt]
  );

  return (
    <Container>
      <TitleArea>
        <Icon name="truck" size={20} color="#7D40E7" />
        <Title>Encomenda {data.id}</Title>
      </TitleArea>
      <StepsInfo>
        <Line width={width} />
        <Steps>
          <Step>
            <Dot fill />
            <StepText>Aguardando Retirada</StepText>
          </Step>
          <Step>
            <Dot fill={data.start_date && true} />
            <StepText>Retirada</StepText>
          </Step>
          <Step>
            <Dot fill={data.end_date && true} />
            <StepText>Entregue</StepText>
          </Step>
        </Steps>
      </StepsInfo>
      <Informations>
        <DateInfo>
          <LabelDate>Data</LabelDate>
          <Date>{dateParsed}</Date>
        </DateInfo>
        <CityInfo>
          <LabelCity>Cidade</LabelCity>
          <City>{data.recipient && data.recipient.city}</City>
        </CityInfo>
        <Details>
          <TouchableOpacity onPress={handleNavigate}>
            <ButtonText>Ver detalhes</ButtonText>
          </TouchableOpacity>
        </Details>
      </Informations>
    </Container>
  );
}
