import React from 'react';
import styled from 'styled-components';
import { IssuesType } from '../Issues';

type IssueProps = {
  issue: IssuesType;
};

function IssueCard({ issue }: IssueProps) {
  const dateToYMD = (date: string) => {
    return `${date.slice(0, 4)}년 ${date.slice(5, 7)}월 ${date.slice(8, 10)}일`;
  };

  return (
    <CardContainer>
      <CardContent>
        <CardTitle>{`# ${issue.number} ${issue.title}`}</CardTitle>
        <CardCreateInfo>{`작성자: ${issue.user.login}, 작성일: ${dateToYMD(
          issue.created_at
        )}`}</CardCreateInfo>
      </CardContent>
      <CardComment>{`코멘트: ${issue.comments}`}</CardComment>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 768px;
  height: 130px;
  display: flex;
  border-bottom: 1px solid black;
`;

const CardTitle = styled.h1`
  width: 600px;
  height: 65px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
const CardContent = styled.div``;
const CardCreateInfo = styled.p`
  width: 600px;
  height: 65px;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const CardComment = styled.p`
  width: 168px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default IssueCard;
