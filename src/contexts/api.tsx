import React, { createContext, Dispatch, useReducer, } from 'react';

type State = {
  issueList: {
    data: any[];
    loading: boolean;
    error: object | null;
  };
  issue: {
    data: any;
    loading: boolean;
    error: object | null;
  };
};

type Action =
  | { type: 'INIT_ISSUELIST'; page: number }
  | { type: 'DOWN_SCROLL'; page: number }
  | { type: 'INIT_ISSUE'; id: number };

type ApiDispatch = Dispatch<Action>;

const ApiStateContext = createContext<State | undefined>(undefined);
const ApiDispatchContext = createContext<ApiDispatch | undefined>(undefined);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INIT_ISSUELIST':
      return state;
    case 'DOWN_SCROLL':
      return state;
    case 'INIT_ISSUE':
      return state;
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
      <ApiDispatchContext.Provider value={dispatch}>
        {children}
      </ApiDispatchContext.Provider>
    </ApiStateContext.Provider>
  )
};
