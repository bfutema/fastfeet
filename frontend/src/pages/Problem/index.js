import React, { useEffect, useState, useRef } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import { cancelOrderRequest } from '~/store/modules/order/actions';

import Table from '~/components/Table';
import BalloonActions, {
  ViewLink,
  DeleteLink,
} from '~/components/BalloonActions';

import Modal from '~/components/Modal';

import api from '~/services/api';
import { paginate } from '~/utils';

import { Tr, Span, ModalContent, Pagination, Page } from './styles';

export default function Problems() {
  const [deliveryProblems, setDeliveryProblems] = useState([]);
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);

  const spansRef = useRef([]);
  const paginationRef = useRef();

  const [modalSelected, setModalSelected] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    async function loadDeliveryProblems() {
      const response = await api.get(
        `delivery/problems?page=${page}&pagination=true`
      );

      spansRef.current = new Array(response.data);

      const responsePages = paginate(page, response.data[0].total);

      setPages(responsePages);
      setDeliveryProblems(response.data);
    }

    loadDeliveryProblems();
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
      const problem = deliveryProblems.find((item) => item.id === id);

      setModalSelected({
        description: problem.description,
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
            <strong>VISUALIZAR PROBLEMA</strong>
            <span>{modalSelected.description}</span>
          </div>
        </ModalContent>
      </Modal>
      <Table title="Problemas na entrega">
        <>
          <thead>
            <tr>
              <th>Encomenda</th>
              <th>Problema</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliveryProblems.map((deliveryProblem, index) => (
              <Tr key={deliveryProblem.id}>
                <td>#{deliveryProblem.idStr}</td>
                <td>{deliveryProblem.description}</td>
                <td>
                  <Span
                    ref={(span) => (spansRef.current[index] = { span })}
                    onMouseEnter={() => handleToggleVisible(index)}
                    onMouseLeave={() => handleToggleVisible(index)}
                  >
                    <FiMoreHorizontal size={16} color="#999999" />
                    <BalloonActions width={200}>
                      <ViewLink
                        toggle={(e) => handleToggleModal(e, deliveryProblem.id)}
                      />
                      <DeleteLink
                        id={deliveryProblem.id}
                        text="Cancelar encomenda"
                        func={cancelOrderRequest}
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
