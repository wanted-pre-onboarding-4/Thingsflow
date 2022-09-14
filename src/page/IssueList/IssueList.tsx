import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { IssueDataInterface, useApiState } from '../../contexts/api';
import Banner from '../../components/Banner';
import useGet from '../../hooks/useGet';
import styled from 'styled-components';
import Loading from '../../components/Loading';
import IssueCard from '../../components/IssueCard';

const IssueList = () => {
  const { issueList } = useApiState();
  const [page, setPage] = useState(issueList.data.length ? issueList.data.length / 4 : 1);
  const { data, loading } = useGet<IssueDataInterface[]>('/issues', page, null);
  const observerBox = useRef(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage(prev => prev + 1);
      }
    },
    [loading]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshod: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (observerBox.current) observer.observe(observerBox.current);

    return () => observer && observer.disconnect();
  }, [handleObserver]);

  return (
    <ul>
      {data?.map((data: any, index: number) => (
        <Fragment key={data.number}>
          <IssueCard
            name={data.user.login}
            created_at={data.created_at}
            issueNumber={data.number}
            comments={data.comments}
            title={data.title}
          />
          {index === 3 && <>{loading ? '' : <Banner />}</>}
        </Fragment>
      ))}
      {loading ? <Loading /> : <ObserverBox ref={observerBox}></ObserverBox>}
    </ul>
  );
};

const ObserverBox = styled.div`
  width: 100%;
  height: 50px;
`;

export default IssueList;
