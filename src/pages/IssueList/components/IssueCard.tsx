import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { RootObject } from '../../../interfaces/interface';
import AddBlock from './AdBlock';

const IssueCard = ({ issue, seq }: { issue: RootObject; seq: number }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${issue.id}`);
  };
  return seq === 5 ? (
    <AddBlock />
  ) : (
    <Container onClick={handleCardClick}>
      <InfoContainer>
        <TitleContainer>
          <HeaderContainer>
            <IssueNumber>#{issue.number}</IssueNumber>
            <IssueTitle>{issue.title}</IssueTitle>
          </HeaderContainer>
          <FooterContainer>
            <AuthorName>작성자: {issue.user.login},</AuthorName>
            <CreatedAt>작성일: {issue.created_at.slice(0, 10)}</CreatedAt>
          </FooterContainer>
        </TitleContainer>
        <CommentContainer>코멘트: {issue.comments}</CommentContainer>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 75px;
  margin-top: 10px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  width: 300px;
`;

const HeaderContainer = styled.div`
  margin-bottom: 5px;
`;

const FooterContainer = styled.div``;

const CommentContainer = styled.div`
  width: 60px;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 12px;
`;

const IssueNumber = styled.span`
  margin-right: 10px;
`;

const IssueTitle = styled.span``;

const AuthorName = styled.span`
  font-size: 12px;
  margin-right: 5px;
`;

const CreatedAt = styled.span`
  font-size: 12px;
`;

export default IssueCard;
