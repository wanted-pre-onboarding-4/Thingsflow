/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { issueApi } from '../../services/api';
import IssueCard from './components/IssueCard';
import { RootObject } from '../../interfaces/interface';
import Loading from '../../components/Loading';

const REQUEST_PARAMS = {
  sort: 'comments',
  page: 1,
  per_page: 20,
};

const IssueList = () => {
  const [issues, setIssues] = useState<RootObject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [isEnded, setIsEnded] = useState<boolean>(false);

  const getIssueData = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data } = await issueApi.getAllIssue('angular', 'angular-cli', REQUEST_PARAMS);

      if (data.length === 0) {
        alert('더이상 불러올 데이터가 존재하지 않습니다.');
        setIsEnded(true);
        setInitialLoading(false);
        return;
      }

      setIssues(prev => prev.concat(data));
      REQUEST_PARAMS.page += 1;
    } catch (e: unknown) {
      console.warn(e);
    } finally {
      setInitialLoading(false);
      setIsLoading(false);
    }
  }, [REQUEST_PARAMS.page]);

  // Observation
  useEffect(() => {
    let observer: IntersectionObserver;
    if (isEnded) return;

    if (target) {
      const onIntersect = async (
        entry: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        if (entry[0].isIntersecting) {
          observer.unobserve(entry[0].target);
          await getIssueData();
          observer.observe(entry[0].target);
        }
      };

      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  useEffect(() => {
    console.log(issues);
    getIssueData();
  }, []);

  return initialLoading ? (
    <Loading />
  ) : (
    <>
      {issues.map((issue: RootObject, idx: number) => (
        <IssueCard isDetail={false} key={issue.id} issue={issue} seq={idx + 1} />
      ))}
      {!isLoading && <div ref={setTarget}></div>}
    </>
  );
};

export default IssueList;
