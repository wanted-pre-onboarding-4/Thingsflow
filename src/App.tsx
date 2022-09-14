import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import getIssues from './hooks/getIssues';
import Issues from './pages/issues/Issues';
import GlobalStyle from './styles/Globalstyles';
import { IssueListInterface } from './utils/IssueListInterface';
export const issueContext = createContext<IssueListInterface[]>([]);

function App() {
  const [issue, setIssue] = useState<IssueListInterface[]>([]);

  useEffect(() => {
    getIssues().then(res => setIssue(res));
  }, []);
  return (
    <Router>
      <GlobalStyle />
      <issueContext.Provider value={issue}>
        <Routes>
          <Route path="/" element={<Issues />}></Route>
          <Route path="/detail/:issue_id" element={<div>상세 페이지</div>}></Route>
        </Routes>
      </issueContext.Provider>
    </Router>
  );
}

export default App;
