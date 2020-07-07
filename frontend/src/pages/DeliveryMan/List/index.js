import React, { useEffect, useState, useRef } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import { deleteDeliveryManRequest } from '~/store/modules/deliveryman/actions';

import Table from '~/components/Table';
import BalloonActions, {
  EditLink,
  DeleteLink,
} from '~/components/BalloonActions';

import api from '~/services/api';
import { paginate } from '~/utils';

import { Tr, Avatar, Span, Pagination, Page } from './styles';

export default function DeliveryMans() {
  const [deliveryMans, setDeliveryMans] = useState([]);
  const [pages, setPages] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const spansRef = useRef([]);
  const paginationRef = useRef();

  useEffect(() => {
    async function searchDeliveryMans(q) {
      const response = await api.get(`deliverymans?pagination=true&q=${q}`);

      setDeliveryMans(response.data);
    }

    searchDeliveryMans(search);
  }, [search]);

  useEffect(() => {
    async function loadDeliveryMans() {
      const response = await api.get(
        `deliverymans?page=${page}&pagination=true`
      );

      spansRef.current = new Array(response.data);

      const responsePages = paginate(page, response.data[0].total);

      setPages(responsePages);
      setDeliveryMans(response.data);
    }

    loadDeliveryMans();
  }, [page]);

  function handleToggleVisible(index) {
    const { span: currentSpan } = spansRef.current[index];

    if (currentSpan.classList.contains('active')) {
      currentSpan.classList.remove('active');
    } else {
      currentSpan.classList.add('active');
    }
  }

  function handlePaginate(numberPage) {
    if (!String(numberPage).includes('...')) {
      setPage(numberPage);
    }
  }

  return (
    <>
      <Table
        title="Gerenciando entregadores"
        searchPlaceholder="entregadores"
        buttonColor="var(--primary-color)"
        buttonText="Cadastrar"
        buttonFontSize={12}
        buttonFontColor="#fff"
        buttonType="link"
        linkUrl="/save/deliveryman"
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
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliveryMans.map((deliveryMan, index) => (
              <Tr key={deliveryMan.id}>
                <td>#{deliveryMan.idStr}</td>
                <td>
                  <Avatar color="#A28FD0">{deliveryMan.initialLetters}</Avatar>
                </td>
                <td>{deliveryMan.name}</td>
                <td>{deliveryMan.email}</td>
                <td>
                  <Span
                    ref={(span) => (spansRef.current[index] = { span })}
                    onMouseEnter={() => handleToggleVisible(index)}
                    onMouseLeave={() => handleToggleVisible(index)}
                  >
                    <FiMoreHorizontal size={16} color="#999999" />
                    <BalloonActions width={140}>
                      <EditLink link={`/save/deliveryman/${deliveryMan.id}`} />
                      <DeleteLink
                        id={deliveryMan.id}
                        text="Excluir"
                        func={deleteDeliveryManRequest}
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
