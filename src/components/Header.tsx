import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <HeaderTitle>Angular / Angular-cli</HeaderTitle>
    </Container>
  );
};

const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.span`
  color: ${({ theme }) => theme.GRAY_1};
  font-size: 1.2rem;
`;

export default Header;
