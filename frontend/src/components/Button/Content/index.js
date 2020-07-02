import React from 'react';
import PropTypes from 'prop-types';
import { FiPlus } from 'react-icons/fi';

import { Container, Text } from './styles';

export default function Content({ fontColor, fontSize, fontWeight, text }) {
  return (
    <Container>
      <FiPlus size={fontSize + 8} color={fontColor} />
      <Text fontColor={fontColor} fontSize={fontSize} fontWeight={fontWeight}>
        {text}
      </Text>
    </Container>
  );
}

Content.defaultProps = {
  fontSize: 16,
  fontWeight: 'bold',
};

Content.propTypes = {
  fontColor: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  text: PropTypes.string.isRequired,
};
