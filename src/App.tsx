import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Issues from './pages/issues/Issues';
import GlobalStyle from './styles/Globalstyles';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Issues />}></Route>
        <Route path="/detail/:issue_id" element={<div>상세 페이지</div>}></Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
