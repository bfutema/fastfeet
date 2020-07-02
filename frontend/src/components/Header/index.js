import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/fastfeet-logo.png';

import { Container, Content } from './styles';

export default function Header() {
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
          <form>
            <button type="submit">Sair do sistema</button>
          </form>
        </aside>
      </Content>
    </Container>
  );
}
