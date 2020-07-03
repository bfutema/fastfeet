import React from 'react';
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import { IoMdEye, IoMdCreate } from 'react-icons/io';

import { Container, Action } from './styles';

export default function BalloonActions({ children }) {
  return <Container>{children}</Container>;
}

export function ViewLink() {
  return (
    <Action>
      <IoMdEye color="var(--primary-color)" size={16} />
      <span>Visualizar</span>
    </Action>
  );
}

export function EditLink() {
  return (
    <Action>
      <IoMdCreate color="var(--second-color)" size={16} />
      <span>Editar</span>
    </Action>
  );
}

export function DeleteLink() {
  return (
    <Action>
      <MdDeleteForever color="var(--third-color)" size={16} />
      <span>Excluir</span>
    </Action>
  );
}

BalloonActions.propTypes = {
  children: PropTypes.element.isRequired,
};
