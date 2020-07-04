import React, { useEffect, useState, useRef } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import { deleteOrderRequest } from '~/store/modules/order/actions';

import Table from '~/components/Table';
import BalloonActions, {
  ViewLink,
  EditLink,
  DeleteLink,
} from '~/components/BalloonActions';
import Badge from './Badge';

import Modal from '~/components/Modal';

import api from '~/services/api';

import { Tr, Avatar, Span, ModalContent, Dates } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(true);
  const spansRef = useRef([]);

  useEffect(() => {
    async function searchOrders(q) {
      const response = await api.get(`orders?pagination=true&q=${q}`);

      setOrders(response.data);
    }

    searchOrders(search);
  }, [search]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('orders?pagination=true');

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

  function handleToggleModal() {
    // eslint-disable-next-line no-console
    console.log('Situação modal: ', isOpenModal);
    setIsOpenModal(!isOpenModal);
  }

  return (
    <>
      <Modal isOpen={isOpenModal} toggle={handleToggleModal}>
        <ModalContent>
          <div>
            <strong>Informações da encomenda</strong>
            <span>Rua Bethoven, 1729</span>
            <span>Diadema - SP</span>
            <span>09960-580</span>
          </div>
          <div>
            <strong>Datas</strong>
            <Dates>
              <strong>Retirada: </strong>
              <span>25/01/2020</span>
              <strong>Entrega</strong>
              <span>25/01/2020</span>
            </Dates>
          </div>
          <div>
            <strong>Assinatura do destinatário</strong>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Assinatura_Ant%C3%B3nio_Maria_da_Silva.svg/1200px-Assinatura_Ant%C3%B3nio_Maria_da_Silva.svg.png"
              alt=""
            />
          </div>
        </ModalContent>
      </Modal>
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
        search={search}
        setSearch={setSearch}
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
                      <ViewLink toggle={handleToggleModal} />
                      <EditLink link={`/save/order/${order.id}`} />
                      <DeleteLink
                        id={order.id}
                        text="Excluir"
                        func={deleteOrderRequest}
                      />
                    </BalloonActions>
                  </Span>
                </td>
              </Tr>
            ))}
          </tbody>
        </>
      </Table>
    </>
  );
}
