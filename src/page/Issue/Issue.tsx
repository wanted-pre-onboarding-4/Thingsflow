import React from 'react';
import { useLocation } from 'react-router-dom';
import IssueCard from '../../components/IssueCard';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import { IssueDataInterface } from '../../contexts/api';
import useGet from '../../hooks/useGet';
import MarkDown from './components/Markdown';

const Issue = () => {
  const { pathname } = useLocation();
  const { data, loading } = useGet<IssueDataInterface>(
    '/issues',
    null,
    +pathname.split('/issue/')[1]
  );

  return (
    <Layout>
      {loading || !data ? (
        <Loading />
      ) : (
        <>
          <IssueCard
            isDetail={true}
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
    </Layout>
  );
};

export default Issue;
