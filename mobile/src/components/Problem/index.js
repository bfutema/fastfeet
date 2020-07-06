/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Card, Text, Date } from './styles';

export default function Problem({ data }) {
  const dateParsed = useMemo(
    () =>
      format(parseISO(data.createdAt), 'dd/MM/yyyy', {
        locale: pt,
      }),
    [data.createdAt]
  );

  return (
    <Card key={data.id}>
      <Text>{data.description}</Text>
      <Date>{dateParsed}</Date>
    </Card>
  );
}
