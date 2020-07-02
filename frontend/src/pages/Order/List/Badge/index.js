import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Badge({ status, text }) {
  return (
    <Container status={status}>
      <div />
      {text}
    </Container>
  );
}

Badge.propTypes = {
  status: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
