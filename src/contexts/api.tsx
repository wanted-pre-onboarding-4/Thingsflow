import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { IssueDataInterface } from '../types/type';

type State = {
  issueList: {
    data: IssueDataInterface[] | [];
    loading: boolean;
    error: string | null;
  };
  issue: {
    data: IssueDataInterface | null;
    loading: boolean;
    error: string | null;
  };
};

type Action =
  | { type: 'ISSUELIST'; page: number }
  | { type: 'ISSUELIST_FAIL'; error: string }
  | { type: 'ISSUELIST_SUCCESS'; data: IssueDataInterface[] }
  | { type: 'ISSUE'; id: number }
  | { type: 'ISSUE_FAIL'; error: string }
  | { type: 'ISSUE_SUCCESS'; data: IssueDataInterface };

type ApiDispatch = Dispatch<Action>;

const ApiStateContext = createContext<State | undefined>(undefined);
const ApiDispatchContext = createContext<ApiDispatch | undefined>(undefined);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ISSUELIST':
      return { issueList: { ...state.issueList, loading: true }, issue: { ...state.issue } };
    case 'ISSUELIST_SUCCESS':
      return {
        issueList: {
          ...state.issueList,
          loading: false,
          data: [...state.issueList.data, ...action.data],
        },
        issue: { ...state.issue },
      };
    case 'ISSUELIST_FAIL':
      return {
        issueList: { ...state.issueList, loading: false, error: action.error },
        issue: { ...state.issue },
      };
    case 'ISSUE':
      return { issueList: { ...state.issueList }, issue: { ...state.issue, loading: true } };
    case 'ISSUE_SUCCESS':
      return {
        issueList: { ...state.issueList },
        issue: { ...state.issue, loading: false, data: action.data },
      };
    case 'ISSUE_FAIL':
      return {
        issueList: { ...state.issueList },
        issue: { ...state.issue, loading: false, error: action.error },
      };
    default:
      return state;
  }
}

export function ApiProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    issueList: {
      data: [],
      loading: false,
      error: null,
    },
    issue: {
      data: null,
      loading: false,
      error: null,
    },
  });

  return (
    <ApiStateContext.Provider value={state}>
      <ApiDispatchContext.Provider value={dispatch}>{children}</ApiDispatchContext.Provider>
    </ApiStateContext.Provider>
  );
}

export const useApiDispatch = () => {
  const dispatch = useContext(ApiDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find ApiDispatchContext');
  }
  return dispatch;
};

export const useApiState = () => {
  const state = useContext(ApiStateContext);
  if (!state) {
    throw new Error('Cannot find ApiStateContext');
  }
  return state;
};
