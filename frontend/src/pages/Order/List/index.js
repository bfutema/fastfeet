import React, { useEffect, useState, useRef } from 'react';
import { format, parseISO } from 'date-fns';
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
import { paginate, cep } from '~/utils';

import {
  Tr,
  Avatar,
  Span,
  ModalContent,
  Dates,
  Pagination,
  Page,
} from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [pages, setPages] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const [modalSelected, setModalSelected] = useState({});

  const [isOpenModal, setIsOpenModal] = useState(false);
  const spansRef = useRef([]);
  const paginationRef = useRef();

  useEffect(() => {
    async function searchOrders(q) {
      const response = await api.get(`orders?pagination=true&q=${q}`);

      setOrders(response.data);
    }

    searchOrders(search);
  }, [page, search]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get(`orders?page=${page}&pagination=true`);

      spansRef.current = new Array(response.data);

      const responsePages = paginate(page, response.data[0].total);

      setPages(responsePages);
      setOrders(response.data);
    }

    loadOrders();
  }, [page]);

  function handleToggleVisible(index) {
    const { span: currentSpan } = spansRef.current[index];

    if (currentSpan.classList.contains('active')) {
      currentSpan.classList.remove('active');
    } else {
      currentSpan.classList.add('active');
    }
  }

  function handleToggleModal(e, id) {
    if (e.target.classList.contains('xModal')) setIsOpenModal(!isOpenModal);
    if (
      e.target.classList.contains('modal') &&
      !e.target.classList.contains('xModal')
    ) {
      const order = orders.find((item) => item.id === id);

      const zip = cep(String(order.recipient.zip));
      const start_date = order.start_date
        ? format(parseISO(order.start_date), 'dd/MM/yyyy')
        : 'Pendente';
      const end_date = order.end_date
        ? format(parseISO(order.end_date), 'dd/MM/yyyy')
        : 'Não entregue';

      setModalSelected({
        street: order.recipient.street,
        number: order.recipient.number,
        city: order.recipient.city,
        state: order.recipient.state,
        zip,
        start_date,
        end_date,
      });
      setIsOpenModal(!isOpenModal);
    }
  }

  function handlePaginate(numberPage) {
    if (!String(numberPage).includes('...')) {
      setPage(numberPage);
    }
  }

  return (
    <>
      <Modal isOpen={isOpenModal} toggle={handleToggleModal}>
        <ModalContent>
          <div>
            <strong>Informações da encomenda</strong>
            <span>
              {modalSelected.street}, {modalSelected.number}
            </span>
            <span>
              {modalSelected.city} - {modalSelected.state}
            </span>
            <span>{modalSelected.zip}</span>
          </div>
          <div>
            <strong>Datas</strong>
            <Dates>
              <strong>Retirada: </strong>
              <span>{modalSelected.start_date}</span>
              <strong>Entrega</strong>
              <span>{modalSelected.end_date}</span>
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
                      <ViewLink
                        toggle={(e) => handleToggleModal(e, order.id)}
                      />
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
      <Pagination ref={paginationRef}>
        {pages.map((p) => (
          <Page
            key={typeof p === 'string' ? Math.random() : String(p)}
            onClick={() => handlePaginate(p)}
            active={!String(p).includes('...') && Number(p) === page}
          >
            {p}
          </Page>
        ))}
      </Pagination>
    </>
  );
}
