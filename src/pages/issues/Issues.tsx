import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import IssueCard from './components/IssueCard';
import styled from 'styled-components';

type UserType = {
  login: string;
};

export type IssuesType = {
  number: number;
  title: string;
  author_association: string;
  created_at: string;
  body: string;
  comments: number;
  user: UserType;
  id: number;
};

function Issues() {
  const [issues, setissues] = useState<IssuesType[]>([]);
  const target = useRef<HTMLDivElement>(null);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const page = useRef<number>(1);

  const fetch = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}issues?per_page=7&&sort=comments&&page=${page.current}`,
        {
          headers: {
            Authorization: `auth ${process.env.REACT_APP_ACCESS_TOKEN}`,
          },
        }
      );
      setissues(prevIssues => [...prevIssues, ...data]);
      setHasNextPage(data.length === 7);
      if (data.length) {
        page.current += 1;
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    if (!target.current || !hasNextPage) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        fetch();
      }
    });
    io.observe(target.current);

    return () => {
      io.disconnect();
    };
  }, [fetch, hasNextPage]);
  console.log(issues);
  return (
    <>
      {issues.map((issue, idx) => (
        <>
          <IssueCard key={idx} issue={issue}></IssueCard>
          {idx === 3 && (
            <a href="https://thingsflow.com/ko/home">
              <ADImg key={idx + issue.id} src={`${process.env.PUBLIC_URL}/logo.png`}></ADImg>
            </a>
          )}
        </>
      ))}
      <div ref={target}></div>
    </>
  );
}

const ADImg = styled.img`
  width: 768px;
  height: 130px;
  border-bottom: 1px solid black;
`;

export default Issues;
