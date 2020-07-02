import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import Table from '~/components/Table';
import Badge from './Badge';

import { Avatar } from './styles';

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
            <td>
              <Avatar color="#A28FD0">JD</Avatar>
              John Doe
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Badge status="delivered" text="Entregue" />
            </td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Wolfgang Amadeus</td>
            <td>
              <Avatar color="#CB946C">GA</Avatar>
              Gaspar Antunes
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Badge status="pending" text="Pendente" />
            </td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#03</td>
            <td>Johann Sebastian Bach</td>
            <td>
              <Avatar color="#83CEC9">DJ</Avatar>
              Dai Jiang
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Badge status="withdrawal" text="Retirada" />
            </td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#04</td>
            <td>Frédéric Chopin</td>
            <td>
              <Avatar color="#CC7584">TH</Avatar>
              Tom Hanson
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Badge status="cancelled" text="Entregue" />
            </td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#05</td>
            <td>Piotr Ilitch Tchaikovski</td>
            <td>
              <Avatar color="#A8D080">MF</Avatar>
              Marc Franklin
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Badge status="delivered" text="Entregue" />
            </td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#06</td>
            <td>Antonio Vivaldi</td>
            <td>
              <Avatar color="#CCCC8B">RC</Avatar>
              Rosetta Castro
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Badge status="delivered" text="Entregue" />
            </td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
        </tbody>
      </>
    </Table>
  );
}
