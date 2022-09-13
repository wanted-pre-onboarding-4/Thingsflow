import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IssueItem = () => {
  return (
    <Container>
      <LinkWrapper to="/issue/12">
        <ContentWrapper>
          <div className="title">
            <span>#111</span>
            <h1>issue title</h1>
          </div>
          <div className="info">
            <span>
              작성자: <span>name</span>
            </span>
            ,
            <span>
              작성일: <span>2019년 12월 31일</span>
            </span>
          </div>
        </ContentWrapper>
        <div className="coment">코멘트: 67</div>
      </LinkWrapper>
    </Container>
  );
};

const Container = styled.li`
  width: 100%;
  border-bottom: 1px solid black;
  padding: 20px 0;
`;
const LinkWrapper = styled(Link)`
  display: grid;
  grid-template-columns: 5fr 1fr;
  /* justify-items:center; */
  align-items: center;
  @media (max-width: 440px) {
    .coment {
      font-size: 0.8rem;
    }
  }
`;
const ContentWrapper = styled.div`
  .title {
    font-size: 1.3rem;
    margin-bottom: 10px;
    display: flex;
    span {
      margin-right: 5px;
    }
  }
  .info {
    font-size: 1rem;
  }
  @media (max-width: 440px) {
    .info {
      font-size: 0.8rem;
    }
  }
`;

export default IssueItem;
