import React from 'react';
import PropTypes from 'prop-types';

import { Container, CardModal } from './styles';

export default function Modal({ isOpen, toggle, children }) {
  return (
    <Container className={isOpen ? 'xModal active' : 'xModal'} onClick={toggle}>
      <CardModal>{children}</CardModal>
    </Container>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
