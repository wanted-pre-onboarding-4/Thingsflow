import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingDotWrapper>
        <div></div>
        <div></div>
        <div></div>
      </LoadingDotWrapper>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingDotWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-bottom: 20px;
  div {
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
  }

  div:nth-child(1) {
    animation: FirstDotScale 3s linear infinite;
  }

  #loading_dotWrapper div:nth-child(2) {
    animation: SecondDotScale 3s linear infinite;
  }

  #loading_dotWrapper div:nth-child(3) {
    animation: ThirdDotScale 3s linear infinite;
  }

  @keyframes FirstDotScale {
    0% {
      transform: scale(1.5);
    }
    15% {
    }
    30% {
      transform: scale(1);
    }
  }

  @keyframes SecondDotScale {
    30% {
      transform: scale(1.5);
    }
    45% {
    }
    60% {
      transform: scale(1);
    }
  }

  @keyframes ThirdDotScale {
    60% {
      transform: scale(1.5);
    }
    75% {
    }
    90% {
      transform: scale(1);
    }
  }
`;

export default Loading;
