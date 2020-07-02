import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import Table from '~/components/Table';

import { Avatar } from './styles';

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
            <td>
              <Avatar color="#A28FD0">JD</Avatar>
            </td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>
              <Avatar color="#CB946C">GA</Avatar>
            </td>
            <td>Gaspar Antunes</td>
            <td>example@rocketseat.com</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#03</td>
            <td>
              <Avatar color="#83CEC9">DJ</Avatar>
            </td>
            <td>Dai Jang</td>
            <td>example@rocketseat.com</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#04</td>
            <td>
              <Avatar color="#CC7584">TH</Avatar>
            </td>
            <td>Tom Hanson</td>
            <td>example@rocketseat.com</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#05</td>
            <td>
              <Avatar color="#A8D080">MF</Avatar>
            </td>
            <td>Marc Franklin</td>
            <td>example@rocketseat.com</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#06</td>
            <td>
              <Avatar color="#CCCC8B">RC</Avatar>
            </td>
            <td>Rosetta Castro</td>
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
