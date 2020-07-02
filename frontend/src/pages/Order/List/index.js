import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import Table from '~/components/Table';

export default function Orders() {
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
          <tr>
            <td>#01</td>
            <td>Ludwing van Beetoven</td>
            <td>John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Ludwing van Beetoven</td>
            <td>John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Ludwing van Beetoven</td>
            <td>John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Ludwing van Beetoven</td>
            <td>John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Ludwing van Beetoven</td>
            <td>John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Ludwing van Beetoven</td>
            <td>John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
        </tbody>
      </>
    </Table>
  );
}
