import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">멍멍냥냥</Link>
      </div>
      <div className="navbar-links">
        <Link to="/freeboard">자유 게시판</Link>
        <Link to="/adoption">입양 / 임시보호</Link>
        <Link to="/qna">고민 해결소</Link>
        <Link to="/jarang">자랑 게시판</Link>
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
