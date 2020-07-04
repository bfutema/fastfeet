import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import { IoMdEye, IoMdCreate } from 'react-icons/io';

import { Container, Action } from './styles';

export default function BalloonActions({ children, width }) {
  return <Container width={width}>{children}</Container>;
}

export function ViewLink({ link }) {
  return (
    <Action color="#7d40e7">
      <IoMdEye color="var(--primary-color)" size={16} />
      <Link to={link}>Visualizar</Link>
    </Action>
  );
}

export function EditLink({ link }) {
  return (
    <Action color="#4D85EE">
      <IoMdCreate color="var(--second-color)" size={16} />
      <Link to={link}>Editar</Link>
    </Action>
  );
}

export function DeleteLink({ id, text, func }) {
  const dispatch = useDispatch();

  function handleDelete() {
    const confirm = window.confirm(
      'Você deseja realmente excluir este registro ?'
    );

    if (confirm) dispatch(func(id));
  }

  return (
    <Action color="#DE3B3B">
      <MdDeleteForever color="var(--third-color)" size={16} />
      <button type="button" onClick={handleDelete}>
        {text}
      </button>
    </Action>
  );
}

BalloonActions.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  width: PropTypes.number.isRequired,
};

ViewLink.propTypes = {
  link: PropTypes.string.isRequired,
};

EditLink.propTypes = {
  link: PropTypes.string.isRequired,
};

DeleteLink.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
