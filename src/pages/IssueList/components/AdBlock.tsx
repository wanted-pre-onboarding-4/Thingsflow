import React from 'react';
import styled from 'styled-components';

const AddBlock = () => {
  const handleImageClick = () => {
    window.location.href = 'https://thingsflow.com/ko/home';
  };
  return (
    <Container>
      <ThingsImage
        onClick={handleImageClick}
        src={require('../../../assets/images/AdImage.png')}
        width={50}
        height={50}
      ></ThingsImage>
    </Container>
  );
};

const Container = styled.div`
  height: 75px;
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.WHITE_1};
`;

const ThingsImage = styled.img`
  cursor: pointer;
`;

export default AddBlock;
