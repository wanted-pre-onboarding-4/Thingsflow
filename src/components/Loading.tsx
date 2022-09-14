import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingDotWrapper />
    </LoadingWrapper>
  );
};

const split = keyframes`
 0% , 25%{ width: 64px }
 100%{ width: 148px }
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingDotWrapper = styled.div`
  width: 64px;
  height: 48px;
  position: relative;
  animation: ${split} 1s ease-in infinite alternate;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    left: 0;
    top: 0;
    transform: translateX(-10px);
    background: #ff3d00;
    opacity: 0.75;
    backdrop-filter: blur(20px);
  }

  &::after {
    left: auto;
    right: 0;
    background: skyblue;
    transform: translateX(10px);
  }
`;

export default Loading;
