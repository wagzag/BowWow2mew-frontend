import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';  
import FreeBoard from './components/FreeBoard.js';
import AdoptionBoard from './components/AdoptionBoard.js';
import QuestionsBoard from './components/QuestionsBoard.js';  
import BoastsBoard from './components/BoastsBoard.js';
import RecommendationsBoard from './components/RecommendationsBoard.js';

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
      </Routes>
    </Router>
  );
};

export default App;
