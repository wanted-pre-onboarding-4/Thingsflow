import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import { IssueDataInterface } from '../../contexts/api';
import useGet from '../../hooks/useGet';
import IssueHeader from './components/Header';
import IssueMain from './components/Main';
import Motivation from './components/Motivation';

const Issue = () => {
  const { pathname } = useLocation();
  const { data, loading } = useGet<IssueDataInterface>("/issues", null, +pathname.split("/issue/")[1]);

  return (
    <Layout>
      {loading || !data ?
        <Loading />
        :
        <div>
          <IssueHeader avatarUrl={data.user.avatar_url} name={data.user.login} created_at={data.created_at} issueNumber={data.number} comments={data.comments} title={data.title} />
          <IssueMain body={data.body} attp={data.labels.map((label: any) => label.name)} />
          <Motivation />
        </div>
      }
    </Layout>
  );
};

export default Issue;
