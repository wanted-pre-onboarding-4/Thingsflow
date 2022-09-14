import styled from 'styled-components';
import { Fragment, useRef } from 'react';
import { IIssue } from '../../utils/types';
import { Link } from 'react-router-dom';
import IssueCard from '../../components/IssueCard';
import { useIssues } from '../../context/IssueContext';

export default function IssueList() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { issues, setPage } = useIssues();

  const onClickAd = () => {
    window.location.href = 'https://thingsflow.com/ko/home';
  };

  const loadMore = () => {
    setPage((prev: number) => prev + 1);
  };
  // page state가 2씩 증가하는 오류 코드
  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     console.log(entries[0]);
  //     if (entries[0].isIntersecting) {
  //       loadMore();
  //     }
  //   });
  //   if (targetRef.current) {
  //     observer.observe(targetRef.current);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <Wrap>
        {issues.map((issue: IIssue, index: number) => (
          <Fragment key={issue.number}>
            <Link to={`/issues/${issue.number}`} state={{ ...issue }}>
              <IssueCard issue={issue} />
            </Link>
            {index === 3 && (
              <AdCard onClick={onClickAd}>
                <img alt="adImage" src="/thinksflow-logo.png" />
              </AdCard>
            )}
          </Fragment>
        ))}
      </Wrap>
      <LoadMore onClick={loadMore} ref={targetRef}>
        LoadMore
      </LoadMore>
    </>
  );
}

const Wrap = styled.div`
  margin-bottom: 50px;
`;

const AdCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
  border-bottom: 1px solid black;
  cursor: pointer;
  img {
    width: 100px;
  }
`;

const LoadMore = styled.div`
  text-align: center;
`;
