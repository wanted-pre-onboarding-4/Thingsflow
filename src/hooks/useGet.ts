import { useEffect } from 'react';
import { useApiDispatch, useApiState } from '../contexts/api';

type returnData = { data: any; loading: boolean; error: string | null };
type useGetFunc = (url: string, page: number | null, id: number | null) => returnData;

const useGet: useGetFunc = (url: string, page = null, id = null) => {
  if (!page && !id) {
    throw new Error('인자 page, id 둘 중 하나는 있어야 합니다.');
  }

  if (page && id) {
    throw new Error('인자 page, id 둘 중 하나만 있어야 합니다.');
  }

  const state = useApiState();
  const dispatch = useApiDispatch();

  const queries = page ? `?state=open&sort=comments&per_page=4&page=${page}` : '';
  const baseUrl = `https://api.github.com/repos/angular/angular-cli${url}${id ? `/${id}` : ''}`;

  const headers = {
    Authorization: `auth ${process.env.REACT_APP_API_TOKEN}`,
  };

  const getDatas = async () => {
    page ? dispatch({ type: 'ISSUELIST', page }) : dispatch({ type: 'ISSUE', id: id! });

    try {
      const result = await fetch(baseUrl + queries, { headers });

      if (!result.ok) {
        page
          ? dispatch({ type: 'ISSUELIST_FAIL', error: '서버의 상태가 이상합니다' })
          : dispatch({ type: 'ISSUE_FAIL', error: '서버의 상태가 이상합니다' });
        return;
      }

      const data = await result.json();

      page
        ? dispatch({ type: 'ISSUELIST_SUCCESS', data })
        : dispatch({ type: 'ISSUE_SUCCESS', data });
    } catch (e) {
      let result = '';
      if (typeof e === 'string') {
        result = e.toUpperCase();
      } else if (e instanceof Error) {
        result = e.message;
      }

      page
        ? dispatch({ type: 'ISSUELIST_FAIL', error: result })
        : dispatch({ type: 'ISSUE_FAIL', error: result });
    }
  };

  useEffect(() => {
    getDatas();
  }, [page, id]);

  return page ? state.issueList : state.issue;
};

export default useGet;
