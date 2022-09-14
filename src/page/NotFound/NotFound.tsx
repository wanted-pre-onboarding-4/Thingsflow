import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  const navigate = useNavigate();
  const isGoToPrev = () => {
    navigate(-1);
  };
  return (
    <Wrap>
      <ChildrenWrapper>
        <ImageSection>
          <Image src="/img/notFound.png" alt="notFoundImage" />
        </ImageSection>
        <Prev>
          <EnglishTitle>Page Not Found</EnglishTitle>
          <KoreanTitle>페이지를 찾을 수 없습니다.</KoreanTitle>
          <PrevButton onClick={isGoToPrev}>이전 페이지</PrevButton>
        </Prev>
      </ChildrenWrapper>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  overflow: auto;
`;
const ChildrenWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 50px 0px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1200px;

  @media ${({ theme }) => theme.breakPoints.mobile} {
    flex-direction: column;
    min-width: 300px;
    padding: 10px 8px;
  }
`;
const ImageSection = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;
  @media ${({ theme }) => theme.breakPoints.mobile} {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 8px;
  }
`;

const Image = styled.img`
  margin-right: 20px;
  width: 76%;
  animation: vibrate-1 0.3s linear infinite both;
  @media ${({ theme }) => theme.breakPoints.mobile} {
    margin: 0;
  }
  @keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }
`;
const Prev = styled.div`
  @media ${({ theme }) => theme.breakPoints.mobile} {
    text-align: center;
    width: 100%;
  }
`;
const EnglishTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 36px;
  @media ${({ theme }) => theme.breakPoints.mobile} {
    margin-bottom: 6px;
    font-size: 24px;
  }
`;
const KoreanTitle = styled.h3`
  @media ${({ theme }) => theme.breakPoints.mobile} {
    font-size: 16px;
  }
`;
const PrevButton = styled.button`
  margin-top: 20px;
  appearance: none;
  background-color: #1a1a1a;
  border: 2px solid #1a1a1a;
  border-radius: 24px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  outline: none;
  padding: 10px 18px;
  text-align: center;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  touch-action: manipulation;
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 10px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export default NotFound;
