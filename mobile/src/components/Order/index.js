/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
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

export default function Order({ data }) {
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
        <Icon name="truck" size={22} color="#7D40E7" />
        <Title>Encomenda {data.id}</Title>
      </TitleArea>
      <Line />
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
          <TouchableOpacity>
            <ButtonText>Ver detalhes</ButtonText>
          </TouchableOpacity>
        </Details>
      </Informations>
    </Container>
  );
}
