import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import FreeBoard from './components/FreeBoard.jsx'
import AdoptionBoard from './components/AdoptionBoard.jsx'
import QuestionsBoard from './components/QuestionsBoard.jsx'
import BoastsBoard from './components/BoastsBoard.jsx'
import RecommendationsBoard from './components/RecommendationsBoard.jsx'
import LoginPage from './components/login.jsx'
import JoinPage from './components/join.jsx'
import BoardWrit from './components/Board/BoardWrite.jsx'
import BoardList from './components/Board/BoardList.jsx'
import BoardDetail from './components/Board/BoardDetail.jsx'
import BoardEdit from './components/Board/BoardEdit.jsx'

const AppContent = () => {
  const location = useLocation()
  const showNavbar = location.pathname !== '/login' && location.pathname !== '/join'

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/freeboard" element={<FreeBoard />} />
        <Route path="/adoption" element={<AdoptionBoard />} />
        <Route path="/questions" element={<QuestionsBoard />} />
        <Route path="/boasts" element={<BoastsBoard />} />
        <Route path="/recommendations" element={<RecommendationsBoard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} /> {/* 회원가입 페이지 경로 추가 */}
        <Route path="freeboard/write" element={<BoardWrit />} />
        <Route path="/board" element={<BoardList />} />
        <Route path="/update/:postId" element={<BoardEdit />} />
        <Route path="/freeboard/:postId" element={<BoardDetail />} />
        <Route path="/adoption/:postId" element={<BoardDetail />} />
        <Route path="/questions/:postId" element={<BoardDetail />} />
        <Route path="/boasts/:postId" element={<BoardDetail />} />
        <Route path="/recommendations/:postId" element={<BoardDetail />} />
      </Routes>
    </>
  )
}

const App = () => (
  <Router>
    <AppContent />
  </Router>
)

export default App
