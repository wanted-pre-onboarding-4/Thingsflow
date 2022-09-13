import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  const navigate = useNavigate();

  const handleHomeButton = () => {
    navigate('/');
  };
  return (
    <Container>
      <NotFoundImage src={require('../../assets/images/notfound.jpg')} width={300} height={300} />
      <HomeButton onClick={handleHomeButton}>Home</HomeButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const NotFoundImage = styled.img``;

const HomeButton = styled.button`
  border: none;
  color: white;
  padding: 10px;
  font-size: 1.2rem;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.BLUE};
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

export default NotFound;
