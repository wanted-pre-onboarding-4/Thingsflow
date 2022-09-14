import { createContext, useState, SetStateAction, Dispatch, useContext, useEffect } from 'react';
import { issueApi } from '../services/IssueServices';
import { IIssue } from '../utils/types';

export const IssueContext = createContext({} as IIssueContext);

export const useIssues = () => useContext(IssueContext);

interface IIssueContext {
  issues: IIssue[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  getList: () => void;
}
export default function IssueProvider({ children }: { children: any }) {
  const [issues, setIssues] = useState<IIssue[]>([]);
  const [page, setPage] = useState(1);

  const getList = () => {
    issueApi
      .getIssueList({ sort: 'comments', status: 'open', per_page: 10, page })
      .then(res => {
        return setIssues([...issues, ...res.data]);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    issues,
    page,
    setPage,
    getList,
  };

  return <IssueContext.Provider value={value}>{children}</IssueContext.Provider>;
}
