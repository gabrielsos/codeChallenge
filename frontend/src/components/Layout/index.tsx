/* eslint-disable react/button-has-type */
import React from 'react';

import { Container, Wrapper, Header, EditIcon } from './styles';
import List from '../List';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <h1>Perguntas</h1>
          <button>
            <EditIcon />
          </button>
        </Header>
        <List />
        <List />
        <List />
        <List />
        <List />
      </Wrapper>
    </Container>
  );
};

export default Layout;
