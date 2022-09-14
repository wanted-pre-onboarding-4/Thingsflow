import React, { useCallback, useEffect, useRef, useState } from 'react';
import Banner from '../../components/Banner';
import Layout from '../../components/Layout';
import IssueItem from '../../components/IssueItem';
import useGet from '../../hooks/useGet';
import styled from 'styled-components';

const IssueList = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useGet('/issues', page, null);
  const observerBox = useRef(null);
  console.log(data); // user.loing  number, created_at comments
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage(prev => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshod: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (observerBox.current) observer.observe(observerBox.current);
  }, [handleObserver]);

  return (
    <Layout>
      <ul>
        {data.slice(0, 4).map((data: any) => (
          <IssueItem name={data.user.login} created_at={data.created_at} issueNumber={data.number} comments={data.comments} title={data.title} />
        ))}
        <Banner />
        {data.slice(4).map((data: any) => (
          <IssueItem name={data.user.login} created_at={data.created_at} issueNumber={data.number} comments={data.comments} title={data.title} />
        ))}
        <ObserverBox ref={observerBox}></ObserverBox>
      </ul>
    </Layout>
  );
};

const ObserverBox = styled.div`
  width: 100%;
  background-color: green;
  height: 50px;
`;

export default IssueList;
