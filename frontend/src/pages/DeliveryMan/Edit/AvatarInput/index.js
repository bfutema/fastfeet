import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput({ avatarId, avatarUrl }) {
  const { registerField } = useField('avatar');

  const [file, setFile] = useState(avatarId && avatarId);
  const [preview, setPreview] = useState(avatarUrl && avatarUrl);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img src={preview || avatarUrl} alt="" />

        <input
          ref={ref}
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  avatarId: PropTypes.number.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};
