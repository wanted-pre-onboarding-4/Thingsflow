import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './pages/common/NotFound';
import IssueList from './pages/IssueList/IssueList';
import GlobalStyle from './styles/Globalstyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IssueList />}></Route>
          <Route path="/detail/:issue_id" element={<div>상세 페이지</div>}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
