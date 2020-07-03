import React, { useEffect, useState, useRef } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import Table from '~/components/Table';
import BalloonActions, {
  ViewLink,
  EditLink,
  DeleteLink,
} from '~/components/BalloonActions';
import Badge from './Badge';

import api from '~/services/api';

import { Tr, Avatar, Span } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const spansRef = useRef([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('orders');

      spansRef.current = new Array(response.data);

      setOrders(response.data);
    }

    loadOrders();
  }, []);

  function handleToggleVisible(index) {
    const { span: currentSpan } = spansRef.current[index];

    if (currentSpan.classList.contains('active')) {
      currentSpan.classList.remove('active');
    } else {
      currentSpan.classList.add('active');
    }
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
          {orders.map((order, index) => (
            <Tr key={`#${order.id}`}>
              <td>{`#${order.idStr}`}</td>
              <td>{order.recipient.name}</td>
              <td>
                <Avatar color="#A28FD0">
                  {order.deliveryman.initialLetters}
                </Avatar>
                {order.deliveryman.name}
              </td>
              <td>{order.recipient.city}</td>
              <td>{order.recipient.state}</td>
              <td>
                <Badge status={order.status.type} text={order.status.text} />
              </td>
              <td>
                <Span
                  ref={(span) => (spansRef.current[index] = { span })}
                  onMouseEnter={() => handleToggleVisible(index)}
                  onMouseLeave={() => handleToggleVisible(index)}
                >
                  <FiMoreHorizontal size={16} color="#999999" />
                  <BalloonActions width={140}>
                    <ViewLink link="/save/order" />
                    <EditLink link={`/save/order/${order.id}`} />
                    <DeleteLink id={order.id} text="Excluir" />
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
