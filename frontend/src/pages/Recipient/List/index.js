import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import Table from '~/components/Table';

export default function Recipients() {
  return (
    <Table
      title="Gerenciando destinatários"
      searchPlaceholder="destinatários"
      buttonColor="var(--primary-color)"
      buttonText="Cadastrar"
      buttonFontSize={12}
      buttonFontColor="#fff"
      buttonType="link"
      linkUrl="/save/deliverymans"
      backButton
      backButtonText="Voltar"
      actions
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
          <tr>
            <td>#01</td>
            <td>John Doe</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>John Doe</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>John Doe</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>John Doe</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>John Doe</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>John Doe</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
        </tbody>
      </>
    </Table>
  );
}
