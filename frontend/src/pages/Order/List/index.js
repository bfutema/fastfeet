import React, { useEffect, useState, useRef, createRef } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import Table from '~/components/Table';
import BalloonActions, {
  ViewLink,
  EditLink,
  DeleteLink,
} from '~/components/BalloonActions';
import Badge from './Badge';

import { Tr, Avatar, Span } from './styles';

const data = [
  {
    id: 1,
    recipient: 'Ludwing van Beetoven',
    deliveryman: {
      initialLetters: 'JD',
      name: 'John Doe',
    },
    city: 'Rio do Sul',
    state: 'Santa Catarina',
    status: {
      type: 'delivered',
      text: 'Entregue',
    },
  },
  {
    id: 2,
    recipient: 'Wolfgang Amadeus',
    deliveryman: {
      initialLetters: 'GA',
      name: 'Gaspar Antunes',
    },
    city: 'Rio do Sul',
    state: 'Santa Catarina',
    status: {
      type: 'pending',
      text: 'Pendente',
    },
  },
  {
    id: 3,
    recipient: 'Johann Sebastian Bach',
    deliveryman: {
      initialLetters: 'DJ',
      name: 'Dai Jiang',
    },
    city: 'Rio do Sul',
    state: 'Santa Catarina',
    status: {
      type: 'withdrawal',
      text: 'Retirada',
    },
  },
  {
    id: 4,
    recipient: 'Frédéric Chopin',
    deliveryman: {
      initialLetters: 'TH',
      name: 'Tom Hanson',
    },
    city: 'Rio do Sul',
    state: 'Santa Catarina',
    status: {
      type: 'cancelled',
      text: 'Cancelada',
    },
  },
  {
    id: 5,
    recipient: 'Piotr Ilitch Tchaikovski',
    deliveryman: {
      initialLetters: 'MF',
      name: 'Marc Franklin',
    },
    city: 'Rio do Sul',
    state: 'Santa Catarina',
    status: {
      type: 'delivered',
      text: 'Entregue',
    },
  },
  {
    id: 6,
    recipient: 'Antonio Vivaldi',
    deliveryman: {
      initialLetters: 'RC',
      name: 'Rosetta Castro',
    },
    city: 'Rio do Sul',
    state: 'Santa Catarina',
    status: {
      type: 'delivered',
      text: 'Entregue',
    },
  },
];

export default function Orders() {
  const [spans, setSpans] = useState([]);
  const spansRef = useRef(data.map(() => createRef()));

  useEffect(() => {
    setSpans(spansRef.current);
  }, [spans]);

  function handleToggleVisible(index) {
    const { current: currentSpan } = spansRef.current[index];

    if (currentSpan.classList.contains('active')) {
      currentSpan.classList.remove('active');
    } else {
      currentSpan.classList.add('active');
    }

    spansRef.current[index] = createRef(currentSpan);

    setSpans([
      ...spansRef.current,
      (spansRef.current[index].current = currentSpan),
    ]);
  }

  return (
    <Table
      title="Gerenciando encomendas"
      searchPlaceholder="encomendas"
      buttonColor="var(--primary-color)"
      buttonText="Cadastrar"
      buttonFontSize={12}
      buttonFontColor="#fff"
      buttonType="link"
      linkUrl="/save/order"
      backButton
      backButtonText="Voltar"
      actions
    >
      <>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order, index) => (
            <Tr key={`#${order.id}`}>
              <td>{`#${order.id}`}</td>
              <td>{order.recipient}</td>
              <td>
                <Avatar color="#A28FD0">
                  {order.deliveryman.initialLetters}
                </Avatar>
                {order.deliveryman.name}
              </td>
              <td>{order.city}</td>
              <td>{order.state}</td>
              <td>
                <Badge status={order.status.type} text={order.status.text} />
              </td>
              <td>
                <Span
                  ref={spansRef.current[index]}
                  onMouseEnter={() => handleToggleVisible(index)}
                  onMouseLeave={() => handleToggleVisible(index)}
                >
                  <FiMoreHorizontal size={16} color="#999999" />
                  <BalloonActions>
                    <ViewLink link="/recipients" />
                    <EditLink link="/recipients" />
                    <DeleteLink id={order.id} />
                  </BalloonActions>
                </Span>
              </td>
            </Tr>
          ))}
        </tbody>
      </>
    </Table>
  );
}
