import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Layout = () => {
  return (
    <Container>
      <Header organization={'Angular'} repository={'Angular-cli'}></Header>
      <ChildrenWrapper>
        <Outlet />
      </ChildrenWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  overflow: auto;
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  margin: 50px 0px;
  max-width: 1200px;
  @media ${({ theme }) => theme.breakPoints.mobile} {
    min-width: 300px;
    padding: 10px 8px;
  }
`;
export default Layout;
