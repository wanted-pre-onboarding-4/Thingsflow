import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';
import useGet from '../../hooks/useGet';
import IssueHeader from './components/Header';
import IssueMain from './components/Main';
import Motivation from './components/Motivation';

const Issue = () => {
  const { pathname } = useLocation();
  const { data } = useGet("/issues", null, +pathname.split("/issue/")[1]);
  if (!data) return "로딩중";
  console.log(data);
  return (
    <Layout>
      <div>
        <IssueHeader avatarUrl={data.user.avatar_url} name={data.user.login} created_at={data.created_at} issueNumber={data.number} comments={data.comments} title={data.title} />
        <IssueMain />
        <Motivation />
      </div>
    </Layout>
  );
};

export default Issue;
