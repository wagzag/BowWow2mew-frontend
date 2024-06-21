//npm install react-slick slick-carousel

import React from 'react';
import Slider from 'react-slick';
import './Main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = () => {
  const petImages = [
    '/images/pet1.png',
    '/images/pet1.png',
    '/images/pet1.png',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="main">
      <div className="weekly-pet">
        <h2>금주의 반려동물</h2>
        <Slider {...sliderSettings}>
          {petImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Weekly Pet ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="hot-issue">
        <h2>HOT Issue</h2>
        <div className="grid-container">
          <div className="grid-item">Issue 1</div>
          <div className="grid-item">Issue 2</div>
          <div className="grid-item">Issue 3</div>
          <div className="grid-item">Issue 4</div>
        </div>
      </div>
      <div className="free-board">
        <div className="free-board-header">
          <h2>자유 게시판</h2>
          <button className="more-btn">더보기</button>
        </div>
        <div className="posts">
          <div className="post">글 1</div>
          <div className="post">글 2</div>
          <div className="post">글 3</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
