import React, { useEffect, useState, useRef } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import Table from '~/components/Table';
import BalloonActions, {
  ViewLink,
  DeleteLink,
} from '~/components/BalloonActions';

import api from '~/services/api';

import { Tr, Span } from './styles';

export default function Problems() {
  const [deliveryProblems, setDeliveryProblems] = useState([]);
  const spansRef = useRef([]);

  useEffect(() => {
    async function loadDeliveryProblems() {
      const response = await api.get('delivery/problems');

      spansRef.current = new Array(response.data);

      setDeliveryProblems(response.data);
    }

    loadDeliveryProblems();
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
                    <ViewLink link={`/deliveryProblem/${deliveryProblem.id}`} />
                    <DeleteLink
                      id={deliveryProblem.id}
                      text="Cancelar encomenda"
                    />
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
