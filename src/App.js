import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './login';
import JoinPage from './join'; // 회원가입 페이지 추가

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} /> {/* 회원가입 페이지 경로 추가 */}
      </Routes>
    </Router>
  );
};

export default App;