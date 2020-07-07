import React, { useEffect, useState, useRef } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import { deleteRecipientRequest } from '~/store/modules/recipient/actions';

import Table from '~/components/Table';
import BalloonActions, {
  EditLink,
  DeleteLink,
} from '~/components/BalloonActions';

import api from '~/services/api';
import { paginate } from '~/utils';

import { Tr, Span, Pagination, Page } from './styles';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [pages, setPages] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const spansRef = useRef([]);
  const paginationRef = useRef();

  useEffect(() => {
    async function searchRecipients(q) {
      const response = await api.get(`recipients?pagination=true&q=${q}`);

      setRecipients(response.data);
    }

    searchRecipients(search);
  }, [search]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get(`recipients?page=${page}&pagination=true`);

      spansRef.current = new Array(response.data);

      const responsePages = paginate(page, response.data[0].total);

      setPages(responsePages);
      setRecipients(response.data);
    }

    loadRecipients();
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
        title="Gerenciando destinatários"
        searchPlaceholder="destinatários"
        buttonColor="var(--primary-color)"
        buttonText="Cadastrar"
        buttonFontSize={12}
        buttonFontColor="#fff"
        buttonType="link"
        linkUrl="/save/recipient"
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
              <th>Nome</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {recipients.map((recipient, index) => (
              <Tr key={recipient.id}>
                <td>#{recipient.idStr}</td>
                <td>{recipient.name}</td>
                <td>
                  {recipient.street}, {recipient.number}, {recipient.city} -{' '}
                  {recipient.state}
                </td>
                <td>
                  <Span
                    ref={(span) => (spansRef.current[index] = { span })}
                    onMouseEnter={() => handleToggleVisible(index)}
                    onMouseLeave={() => handleToggleVisible(index)}
                  >
                    <FiMoreHorizontal size={16} color="#999999" />
                    <BalloonActions width={140}>
                      <EditLink
                        link={`/save/recipient/${recipient.id}`}
                        data={recipient}
                      />
                      <DeleteLink
                        id={recipient.id}
                        text="Excluir"
                        func={deleteRecipientRequest}
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
