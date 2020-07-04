import React from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

import { Container, Input } from './styles';

export default function Search({ width, placeholder, search, setSearch }) {
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <Container>
      <FiSearch size={16} color="#999999" />
      <Input
        width={width}
        placeholder={placeholder}
        onChange={handleSearch}
        value={search}
      />
    </Container>
  );
}

Search.defaultProps = {
  width: 215,
};

Search.propTypes = {
  width: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};
