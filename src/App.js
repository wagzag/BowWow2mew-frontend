// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
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
        <Route path="/" element={<Home />} />
        <Route path="/freeboard" element={<FreeBoard />} />
        <Route path="/adoption" element={<AdoptionBoard />} />
        <Route path="/qna" element={<QnABoard />} />
        <Route path="/proud" element={<JarangBoard />} />
        <Route path="/recommended" element={<RecommendPlace />} />
      </Routes>
    </Router>
  );
};

export default App;
