import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <Container onClick={handleClick}>
      <HeaderTitle>Angular / Angular-cli</HeaderTitle>
    </Container>
  );
};

const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const HeaderTitle = styled.span`
  color: ${({ theme }) => theme.GRAY_1};
  font-size: 1.2rem;
`;

export default Header;
