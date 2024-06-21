import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'; // Link 컴포넌트를 임포트합니다.
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
    <div className="bg-main py-10">
      <div className="mb-10">
        <h2 className="text-3xl mb-5 font-Point text-point">금주의 반려동물</h2>
        <Slider {...sliderSettings}>
          {petImages.map((image, index) => (
            <div key={index} className="px-5">
              <img src={image} alt={`Weekly Pet ${index + 1}`} className="m-auto w-auto" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="mb-10">
        <h2 className="text-3xl mb-5 font-Point text-point">HOT Issue</h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white p-5 rounded-lg shadow">Issue 1</div>
          <div className="bg-white p-5 rounded-lg shadow">Issue 2</div>
          <div className="bg-white p-5 rounded-lg shadow">Issue 3</div>
          <div className="bg-white p-5 rounded-lg shadow">Issue 4</div>
        </div>
      </div>
      <div className="mb-10">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-3xl font-Point text-point">자유 게시판</h2>
          <Link to="/freeboard" className="text-point hover:text-gray-300 cursor-pointer">더보기</Link> {/* Link 컴포넌트로 변경 */}
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-white p-3 rounded-lg shadow">글 1</div>
          <div className="bg-white p-3 rounded-lg shadow">글 2</div>
          <div className="bg-white p-3 rounded-lg shadow">글 3</div>
        </div>
      </div>
      <div className="mb-10">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-3xl font-Point text-point">고민 해결소</h2>
          <Link to="/questions" className="text-point hover:text-gray-300 cursor-pointer">더보기</Link> {/* Link 컴포넌트로 변경 */}
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-white p-3 rounded-lg shadow">글 1</div>
          <div className="bg-white p-3 rounded-lg shadow">글 2</div>
          <div className="bg-white p-3 rounded-lg shadow">글 3</div>
        </div>
      </div>
      <div className="mb-10">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-3xl font-Point text-point">추천 place</h2>
          <Link to="/recommendations" className="text-point hover:text-gray-300 cursor-pointer">더보기</Link> {/* Link 컴포넌트로 변경 */}
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
