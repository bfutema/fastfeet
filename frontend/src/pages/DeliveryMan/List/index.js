import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import Table from '~/components/Table';

export default function DeliveryMans() {
  return (
    <Table
      title="Gerenciando entregadores"
      searchPlaceholder="entregadores"
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
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>JD</td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>JD</td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>JD</td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>JD</td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>JD</td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>JD</td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
        </tbody>
      </>
    </Table>
  );
}
