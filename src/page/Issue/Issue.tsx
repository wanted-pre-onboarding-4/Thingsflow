import React from 'react';
import Layout from '../../components/Layout';
import IssueHeader from './components/Header';
import IssueMain from './components/Main';
import Motivation from './components/Motivation';

const Issue = () => {
  return (
    <Layout>
      <div>
        <IssueHeader />
        <IssueMain />
        <Motivation />
      </div>
    </Layout>
  );
};

export default Issue;
