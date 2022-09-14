import { useContext } from 'react';
import { issueContext } from '../../App';
import IssueCard from './components/IssueCard';
import { IssueListInterface } from '../../utils/IssueListInterface';

function Issues() {
  const issue = useContext(issueContext);
  return (
    <>
      {issue.map((issue: IssueListInterface) => {
        return <IssueCard key={issue.id} issue={issue}></IssueCard>;
      })}
    </>
  );
}

export default Issues;
