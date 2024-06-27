import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import FreeBoard from "./components/FreeBoard.jsx";
import AdoptionBoard from "./components/AdoptionBoard.jsx";
import QuestionsBoard from "./components/QuestionsBoard.jsx";
import BoastsBoard from "./components/BoastsBoard.jsx";
import RecommendationsBoard from "./components/RecommendationsBoard.jsx";
import LoginPage from "./components/login.jsx";
import JoinPage from "./components/join.jsx";
import BoardWrit from "./components/Board/BoardWrite.jsx";
import BoardList from "./components/Board/BoardList.jsx";
import BoardDetail from "./components/Board/BoardDetail.jsx";
import BoardEdit from "./components/Board/BoardEdit.jsx";

const AppContent = () => {
  const location = useLocation();
  const showNavbar =
    location.pathname !== "/login" && location.pathname !== "/join";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />

        <Route path="/freeboard" element={<FreeBoard />} />
        <Route path="/adoption" element={<AdoptionBoard />} />
        <Route path="/questions" element={<QuestionsBoard />} />
        <Route path="/boasts" element={<BoastsBoard />} />
        <Route path="/recommendations" element={<RecommendationsBoard />} />

        <Route path="/freeboard/write" element={<BoardWrit />} />
        <Route path="/adoption/write" element={<BoardWrit />} />
        <Route path="/questions/write" element={<BoardWrit />} />
        <Route path="/boasts/write" element={<BoardWrit />} />
        <Route path="/recommendations/write" element={<BoardWrit />} />

        <Route path="/freeboard/:postId/edit" element={<BoardEdit />} />
        <Route path="/adoption/:postId/edit" element={<BoardEdit />} />
        <Route path="/questions/:postId/edit" element={<BoardEdit />} />
        <Route path="/boasts/:postId/edit" element={<BoardEdit />} />
        <Route path="/recommendations/:postId/edit" element={<BoardEdit />} />

        <Route path="/board" element={<BoardList />} />

        <Route path="/freeboard/:postId" element={<BoardDetail />} />
        <Route path="/adoption/:postId" element={<BoardDetail />} />
        <Route path="/questions/:postId" element={<BoardDetail />} />
        <Route path="/boasts/:postId" element={<BoardDetail />} />
        <Route path="/recommendations/:postId" element={<BoardDetail />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
