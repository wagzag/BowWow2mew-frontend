// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // CSS 파일을 사용해 스타일을 적용합니다.

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        멍멍냥냥
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/freeboard">자유 게시판</Link>
        <Link to="/adoption">입양 / 임시보호</Link>
        <Link to="/qna">고민 해결소</Link>
        <Link to="/proud">자랑 게시판</Link>
        <Link to="/recommended">추천 Place</Link>
      </div>
      <div className="navbar-auth">
        <Link to="/login">Login</Link>
        <Link to="/join">Join</Link>
      </div>
    </nav>
  );
};

export default Navbar;
