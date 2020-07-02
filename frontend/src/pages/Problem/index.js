import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import Table from '~/components/Table';

export default function Problems() {
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
          <tr>
            <td>#01</td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
              mauris et felis eleifend elementum vel quis lectus…
            </td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Destinatário ausente</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#03</td>
            <td>Carga roubada</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#04</td>
            <td>Destinatário ausente</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#05</td>
            <td>Infelizmente sofri um acidente que danificou a encomenda</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
          <tr>
            <td>#06</td>
            <td>Destinatário ausente</td>
            <td>
              <FiMoreHorizontal size={16} color="#999999" />
            </td>
          </tr>
        </tbody>
      </>
    </Table>
  );
}
