import React from 'react';
import PropTypes from 'prop-types';
import { FiPlus } from 'react-icons/fi';

import Search from './Search';
import Button from '~/components/Button';

import { Container, Content, Actions, CustomTable } from './styles';

export default function Table({
  title,
  searchPlaceholder,
  searchWidth,
  buttonColor,
  buttonText,
  buttonType,
  linkUrl,
  buttonFontSize,
  buttonFontColor,
  children,
  actions,
  search,
  setSearch,
}) {
  return (
    <Container>
      <Content>
        <strong>{title}</strong>
        {actions && (
          <Actions>
            <Search
              width={searchWidth}
              placeholder={`Buscar por ${searchPlaceholder}`}
              search={search}
              setSearch={setSearch}
            />
            <Button
              color={buttonColor}
              fontColor={buttonFontColor}
              fontSize={buttonFontSize}
              text={buttonText}
              type={buttonType}
              url={linkUrl}
            >
              <FiPlus size={buttonFontSize + 8} color={buttonFontColor} />
            </Button>
          </Actions>
        )}
        <CustomTable>{children}</CustomTable>
      </Content>
    </Container>
  );
}

Table.defaultProps = {
  searchPlaceholder: '',
  searchWidth: 215,
  buttonColor: '',
  buttonText: '',
  buttonType: 'button',
  linkUrl: '',
  buttonFontSize: 0,
  buttonFontColor: '',
  actions: false,
};

Table.propTypes = {
  title: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string,
  searchWidth: PropTypes.number,
  buttonColor: PropTypes.string,
  buttonText: PropTypes.string,
  buttonType: PropTypes.string,
  linkUrl: PropTypes.string,
  buttonFontSize: PropTypes.number,
  buttonFontColor: PropTypes.string,
  children: PropTypes.element.isRequired,
  actions: PropTypes.bool,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};
