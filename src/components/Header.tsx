import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  organization: string;
  repository: string;
}

const Header = ({ organization, repository }: HeaderProps) => {
  return (
    <Container>
      {organization}/{repository}
    </Container>
  );
};

const Container = styled.header`
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: white;
  height: 60px;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Header;
