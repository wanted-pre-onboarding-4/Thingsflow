import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import IssueDetail from './pages/issueDetail/IssueDetail';
import IssueList from './pages/issueList/IssueList';
import GlobalStyle from './styles/Globalstyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to={'/issues'} />} />
          <Route path="/issues" element={<IssueList />} />
          <Route path="/issues/:issue_id" element={<IssueDetail />} />
        </Route>
        <Route path="*" element={<div>404 page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
