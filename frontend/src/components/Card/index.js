import React from 'react';
import PropTypes from 'prop-types';
import { FiCheck } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';

import Button from '~/components/Button';

import { Container, Content, Title, Actions, BackgroundCard } from './styles';

export default function Card({
  title,
  backButtonColor,
  backButtonText,
  saveButtonColor,
  saveButtonText,
  backButtonType,
  saveButtonType,
  backButtonLinkUrl,
  saveButtonLinkUrl,
  backButtonFontSize,
  saveButtonFontSize,
  backButtonFontColor,
  saveButtonFontColor,
  children,
}) {
  return (
    <Container>
      <Content>
        <Title>
          <strong>{title}</strong>
          <Actions>
            <Button
              color={backButtonColor}
              fontColor={backButtonFontColor}
              fontSize={backButtonFontSize}
              text={backButtonText}
              type={backButtonType}
              url={backButtonLinkUrl}
            >
              <IoIosArrowBack
                size={backButtonFontSize + 8}
                color={backButtonFontColor}
              />
            </Button>
            <Button
              color={saveButtonColor}
              fontColor={saveButtonFontColor}
              fontSize={saveButtonFontSize}
              text={saveButtonText}
              type={saveButtonType}
              url={saveButtonLinkUrl}
            >
              <FiCheck
                size={saveButtonFontSize + 8}
                color={saveButtonFontColor}
              />
            </Button>
          </Actions>
        </Title>
        <BackgroundCard>{children}</BackgroundCard>
      </Content>
    </Container>
  );
}

Card.defaultProps = {
  backButtonColor: '#cccccc',
  backButtonText: 'Voltar',
  saveButtonColor: 'var(--primary-color)',
  saveButtonText: 'Salvar',
  backButtonType: 'link',
  saveButtonType: 'submit',
  backButtonLinkUrl: '',
  saveButtonLinkUrl: '',
  backButtonFontSize: 12,
  saveButtonFontSize: 12,
  backButtonFontColor: '#ffffff',
  saveButtonFontColor: '#ffffff',
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  backButtonColor: PropTypes.string,
  backButtonText: PropTypes.string,
  saveButtonColor: PropTypes.string,
  saveButtonText: PropTypes.string,
  backButtonType: PropTypes.string,
  saveButtonType: PropTypes.string,
  backButtonLinkUrl: PropTypes.string,
  saveButtonLinkUrl: PropTypes.string,
  backButtonFontSize: PropTypes.number,
  saveButtonFontSize: PropTypes.number,
  backButtonFontColor: PropTypes.string,
  saveButtonFontColor: PropTypes.string,
  children: PropTypes.element.isRequired,
};
