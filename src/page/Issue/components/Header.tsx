import React from 'react';
import styled from 'styled-components';
import IssueItem from '../../../components/IssueItem';

interface IssueHeaderProps {
  name: string;
  created_at: string;
  issueNumber: number;
  comments: number;
  title: string;
  avatarUrl: string;
}

const IssueHeader = ({
  name,
  created_at,
  issueNumber,
  comments,
  title,
  avatarUrl,
}: IssueHeaderProps) => {
  return (
    <Container>
      <ImageWrapper>
        <img src={avatarUrl} />
      </ImageWrapper>
      <IssueItem
        name={name}
        created_at={created_at}
        issueNumber={issueNumber}
        title={title}
        comments={comments}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default IssueHeader;
