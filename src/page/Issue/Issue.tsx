import React from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/Loading';
import useGet from '../../hooks/useGet';
import { IssueDataInterface } from '../../types/type';
import IssueHeader from './components/Header';
import MarkDown from './components/Markdown';

const Issue = () => {
  const { pathname } = useLocation();
  const { data, loading } = useGet<IssueDataInterface>(
    '/issues',
    null,
    +pathname.split('/issue/')[1]
  );

  return (
    <>
      {loading || !data ? (
        <Loading />
      ) : (
        <>
          <IssueHeader
            avatarUrl={data.user.avatar_url}
            name={data.user.login}
            created_at={data.created_at}
            issueNumber={data.number}
            comments={data.comments}
            title={data.title}
          />
          <MarkDown content={data.body} />
        </>
      )}
    </>
  );
};

export default Issue;
