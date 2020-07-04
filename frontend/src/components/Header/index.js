import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';

import { Container, Content } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <div>
            <Link to="/dashboard">
              <img src={logo} alt="FastFeet" />
            </Link>
          </div>
          <Link to="/orders">Encomendas</Link>
          <Link to="/deliverymans">Entregadores</Link>
          <Link to="/recipients">Recipients</Link>
          <Link to="/problems">Problemas</Link>
        </nav>
        <aside>
          <strong>Admin FastFeet</strong>
          <div>
            <button type="button" onClick={handleSignOut}>
              Sair do sistema
            </button>
          </div>
        </aside>
      </Content>
    </Container>
  );
}
