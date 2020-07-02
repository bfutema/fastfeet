import React from 'react';
import PropTypes from 'prop-types';
import { FiPlus } from 'react-icons/fi';

import { Container, Content, Text } from './styles';

export default function Button({
  color,
  fontColor,
  fontSize,
  fontWeight,
  text,
}) {
  return (
    <Container color={color}>
      <Content>
        <FiPlus size={fontSize + 8} color={fontColor} />
        <Text fontColor={fontColor} fontSize={fontSize} fontWeight={fontWeight}>
          {text}
        </Text>
      </Content>
    </Container>
  );
}

Button.defaultProps = {
  fontSize: 16,
  fontWeight: 'bold',
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  text: PropTypes.string.isRequired,
};
