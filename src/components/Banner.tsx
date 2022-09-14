import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  return (
    <Container href="https://thingsflow.com/ko/home" target="_blank">
      <div>
        <img src="/img/광고.png" />
      </div>
    </Container>
  );
};

const Container = styled.a`
  div {
    width: 100%;
    height: 200px;
    padding: 10px 0;
    background-color: #fff880;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
export default Banner;
