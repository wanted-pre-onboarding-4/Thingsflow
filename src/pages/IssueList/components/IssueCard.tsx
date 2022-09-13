import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { RootObject } from '../../../interfaces/interface';
import AddBlock from './AdBlock';
import { formatDate } from '../../../utils/format';

const IssueCard = ({
  isDetail = false,
  issue,
  seq,
}: {
  isDetail?: boolean;
  issue: RootObject;
  seq?: number;
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${issue.number}`);
  };
  return seq === 5 ? (
    <AddBlock />
  ) : (
    <Container isDetail={isDetail} onClick={handleCardClick}>
      <InfoContainer>
        {isDetail && <Avartar src={issue.user.avatar_url}></Avartar>}
        <TitleContainer isDetail={isDetail}>
          <HeaderContainer>
            <IssueNumber>#{issue.number}</IssueNumber>
            <IssueTitle>{issue.title}</IssueTitle>
          </HeaderContainer>
          <FooterContainer>
            <AuthorName>작성자: {issue.user.login},</AuthorName>
            <CreatedAt>작성일: {formatDate(issue.created_at)}</CreatedAt>
          </FooterContainer>
        </TitleContainer>
        <CommentContainer isDetail={isDetail}>코멘트: {issue.comments}</CommentContainer>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div<{ isDetail: boolean }>`
  height: 75px;
  margin-top: 10px;
  border-bottom: ${props => (!props.isDetail ? '1px solid black' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props => (props.isDetail ? 'inherit' : 'pointer')};
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Avartar = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const TitleContainer = styled.div<{ isDetail: boolean }>`
  width: ${props => (props.isDetail ? '250px' : '300px')};
  border-bottom: ${props => (props.isDetail ? '1px solid black' : 'none')};
`;

const HeaderContainer = styled.div`
  margin-bottom: 5px;
`;

const FooterContainer = styled.div``;

const CommentContainer = styled.div<{ isDetail: boolean }>`
  width: 60px;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 12px;
  border-bottom: ${props => (props.isDetail ? '1px solid black' : 'none')};
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
