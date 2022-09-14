import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import dateFormat from '../utils/dateFormat';

interface IssueItemProps {
  name: string;
  created_at: string;
  issueNumber: number;
  comments: number;
  title: string;
}

const IssueItem = ({ name, created_at, issueNumber, comments, title }: IssueItemProps) => {
  return (
    <Container>
      <LinkWrapper to={`/issue/${issueNumber}`}>
        <ContentWrapper>
          <div className="title">
            <span>#{issueNumber}</span>
            <h1>{title}</h1>
          </div>
          <div className="info">
            <span>
              작성자: <span>{name}</span>
            </span>
            ,
            <span>
              작성일: <span>{dateFormat(created_at)}</span>
            </span>
          </div>
        </ContentWrapper>
        <div className="coment">코멘트: {comments}</div>
      </LinkWrapper>
    </Container>
  );
};

const Container = styled.li`
  width: 100%;
  border-bottom: 1px solid black;
  padding: 20px 0;
  list-style: none;
`;
const LinkWrapper = styled(Link)`
  display: grid;
  grid-template-columns: 4fr 1fr;
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
    font-weight: 600;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr 5fr;
    span {
      margin-right: 5px;
    }
  }
  .info {
    font-size: 1rem;
  }
  @media (max-width: 440px) {
    .title {
      font-size: 1rem;
    }
    .info {
      font-size: 0.8rem;
    }
  }
`;

export default IssueItem;
