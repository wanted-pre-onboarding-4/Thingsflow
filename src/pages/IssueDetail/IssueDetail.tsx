import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { RootObject } from '../../interfaces/interface';
import { issueApi } from '../../services/api';
import IssueCard from '../IssueList/components/IssueCard';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const IssueDetail = () => {
  const [issue, setIssue] = useState<RootObject | null>(null);
  const location = useLocation();
  const issueNumber = location.pathname.split('/')[2];

  const getIssueDetail = useCallback(async () => {
    const { data } = await issueApi.getIssueDetail('angular', 'angular-cli', issueNumber);
    setIssue(data);
  }, [issueNumber]);

  useEffect(() => {
    getIssueDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    issue && (
      <Container>
        <HeaderContainer>
          <IssueCard isDetail={true} issue={issue} />
        </HeaderContainer>
        <Body>
          <ReactMarkdown>{issue.body}</ReactMarkdown>
        </Body>
      </Container>
    )
  );
};

const Container = styled.div``;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Body = styled.div`
  width: 350px;
  margin: 30px auto;
`;

export default IssueDetail;
