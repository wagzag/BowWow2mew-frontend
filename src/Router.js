import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';  
import FreeBoard from './components/FreeBoard.jsx';
import AdoptionBoard from './components/AdoptionBoard.jsx';
import QuestionsBoard from './components/QuestionsBoard.jsx';  
import BoastsBoard from './components/BoastsBoard.jsx';
import RecommendationsBoard from './components/RecommendationsBoard.jsx';
import LoginPage from './components/login.jsx';
import JoinPage from './components/join.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />  
        <Route path="/freeboard" element={<FreeBoard />} />
        <Route path="/adoption" element={<AdoptionBoard />} />
        <Route path="/questions" element={<QuestionsBoard />} />
        <Route path="/boasts" element={<BoastsBoard />} />
        <Route path="/recommendations" element={<RecommendationsBoard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} /> {/* 회원가입 페이지 경로 추가 */}
      </Routes>
    </Router>
  );
};

export default App;