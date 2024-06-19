import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';  // 홈 페이지 컴포넌트 가져오기
import FreeBoard from './components/FreeBoard.js';
import AdoptionBoard from './components/AdoptionBoard.js';
import QnABoard from './components/QnABoard.js';
import JarangBoard from './components/JarangBoard.js';
import RecommendPlace from './components/RecommendPlace.js';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />  {/* 홈 경로를 메인 페이지로 설정 */}
        <Route path="/freeboard" element={<FreeBoard />} />
        <Route path="/adoption" element={<AdoptionBoard />} />
        <Route path="/qna" element={<QnABoard />} />
        <Route path="/jarang" element={<JarangBoard />} />
        <Route path="/recommended" element={<RecommendPlace />} />
      </Routes>
    </Router>
  );
};

export default App;
