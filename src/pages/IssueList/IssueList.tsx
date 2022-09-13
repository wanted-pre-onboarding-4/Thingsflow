import React, { useCallback, useEffect, useState } from 'react';
import { issueApi } from '../../services/api';
import IssueCard from './components/IssueCard';
import { RootObject } from '../../interfaces/interface';
import AddBlock from './components/AdBlock';

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [target, setTarget] = useState<any>(null);
  const [page, setPage] = useState(1);
  const params = {
    sort: 'comments',
    page,
    per_page: 5,
  };

  const loadMore = useCallback(async () => {
    setIsLoading(true);
    const { data } = await issueApi.getAllIssue('angular', 'angular-cli', params);
    setIssues(prev => prev.concat(data));
    setIsLoading(false);
    setPage(prev => prev + 1);
  }, [page]);

  useEffect(() => {
    loadMore();
  }, []);

  // Observation
  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      const onIntersect = async ([entry]: any, observer: any) => {
        if (entry.isIntersecting && issues.length >= params.per_page) {
          observer.unobserve(entry.target);
          await loadMore();
          observer.observe(entry.target);
        }
      };
      observer = new IntersectionObserver(onIntersect, { threshold: 0.7 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <>
      {issues.map((issue: RootObject, idx: number) => {
        if (idx === 4) {
          return (
            <>
              <AddBlock />
              <IssueCard key={issue.id} issue={issue} />
            </>
          );
        }
        return <IssueCard key={issue.id} issue={issue} />;
      })}
      {!isLoading && <div ref={setTarget}></div>}
    </>
  );
};

export default IssueList;
