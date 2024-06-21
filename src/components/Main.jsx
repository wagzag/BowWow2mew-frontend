import React from 'react';
import Slider from 'react-slick';
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
    <div className="bg-white py-10">
      <div className="mb-10">
        <h2 className="text-3xl mb-5">금주의 반려동물</h2>
        <Slider {...sliderSettings}>
          {petImages.map((image, index) => (
            <div key={index} className="px-5">
              <img src={image} alt={`Weekly Pet ${index + 1}`} className="m-auto w-auto" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="mb-10">
        <h2 className="text-3xl mb-5">HOT Issue</h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white p-5 rounded-lg shadow">Issue 1</div>
          <div className="bg-white p-5 rounded-lg shadow">Issue 2</div>
          <div className="bg-white p-5 rounded-lg shadow">Issue 3</div>
          <div className="bg-white p-5 rounded-lg shadow">Issue 4</div>
        </div>
      </div>
      <div className="mb-10">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-3xl">자유 게시판</h2>
          <button className="mt-3 px-5 py-2 bg-white border-none rounded-lg shadow cursor-pointer">더보기</button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-white p-3 rounded-lg shadow">글 1</div>
          <div className="bg-white p-3 rounded-lg shadow">글 2</div>
          <div className="bg-white p-3 rounded-lg shadow">글 3</div>
        </div>
      </div>
    </div>
  );
};

export default Main;