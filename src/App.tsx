import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<div>Layout</div>}>
          <Route path="/" element={<div>목록 페이지</div>}></Route>
          <Route path="/detail/:issue_id" element={<div>상세 페이지</div>}></Route>
        </Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
