import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
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

  const HotIssueItem = ({ text, time }) => (
    <div className="p-4 bg-main rounded-xl border-2 border-point">
      <p className="font-bold">{text}</p>
      <p className="text-sm text-gray-700">{text}</p>
      <span className="text-xs text-gray-500">{time}</span>
    </div>
  );


  const BoardItem = ({ text, time, user }) => (
    <div className="flex justify-between items-center border-b border-font py-2">
      <p className="flex-1">{text}</p>
      <div className="flex items-center space-x-6">
        <span className="text-s text-font font-regular">{time}</span>
        <span className="text-s text-font font-regular">{user}</span>
      </div>
    </div>
  );

  return (
    <div className="bg-main py-10">
      <div className="mb-10">
        <h2 className="text-2xl mb-4 font-Point text-point">금주의 반려동물</h2>
        <Slider {...sliderSettings}>
          {petImages.map((image, index) => (
            <div key={index} className="px-5">
              <img src={image} alt={`Weekly Pet ${index + 1}`} className="m-auto w-auto" />
            </div>
          ))}
        </Slider>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-Point mb-4 text-point">Hot issue</h2>
        <div className="grid grid-cols-2 gap-4">
          <HotIssueItem text="저희 애가 사료를 안먹어요 ㅠㅠ" time="14:21" />
          <HotIssueItem text="저희 애가 사료를 안먹어요 ㅠㅠ" time="14:21" />
          <HotIssueItem text="저희 애가 사료를 안먹어요 ㅠㅠ" time="14:21" />
          <HotIssueItem text="저희 애가 사료를 안먹어요 ㅠㅠ" time="14:21" />
        </div>
      </section>
      
      <section className="mb-8">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-Point mb-4 text-point">자유 게시판</h2>
        <Link to="/freeboard" className="text-font hover:text-gray-300 cursor-pointer">더보기</Link> </div>
          <div className="space-y-4">
          <BoardItem text="베이글을 구워서 땅콩잼을 발라먹으니 아주 맛있네예" time="20:21" user="와그작" />
          <BoardItem text="베이글을 구워서 땅콩잼을 발라먹으니 아주 맛있네예" time="20:21" user="와그작" />
          <BoardItem text="베이글을 구워서 땅콩잼을 발라먹으니 아주 맛있네예" time="20:21" user="와그작" />
        </div>
      </section>
      
      <section className="mb-8">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-Point mb-4 text-point">입양 & 임시보호</h2>
        <Link to="/adoption" className="text-font hover:text-gray-300 cursor-pointer">더보기</Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <img src="/images/pet2.png" alt="입양 & 임시보호" className="w-full max-w-xs mx-auto rounded" />
          <img src="/images/pet2.png" alt="입양 & 임시보호" className="w-full max-w-xs mx-auto rounded" />
          <img src="/images/pet2.png" alt="입양 & 임시보호" className="w-full max-w-xs mx-auto rounded" />
        </div>
      </section>
      
      <section className="mb-8">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-Point mb-4 text-point">고민 해결소</h2>
        <Link to="/questions" className="text-font hover:text-gray-300 cursor-pointer">더보기</Link>
        </div>
        <div className="space-y-4">
          <BoardItem text="집이지만 아주 집에 가고싶은 심정입니다. 이럴 어떻게 해야 할까요?" time="13:56" user="tjfaudahthgo" />
          <BoardItem text="집이지만 아주 집에 가고싶은 심정입니다. 이럴 어떻게 해야 할까요?" time="13:56" user="tjfaudahthgo"/>
          <BoardItem text="집이지만 아주 집에 가고싶은 심정입니다. 이럴 어떻게 해야 할까요?" time="13:56" user="tjfaudahthgo"/>
        </div>
      </section>
      
      <section className="mb-8">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-Point mb-4 text-point">추천 place</h2>
        <Link to="/recommendations" className="text-font hover:text-gray-300 cursor-pointer">더보기</Link>
        </div>
        <div className="space-y-4">
          <BoardItem text="일일상 꿈결이 아주 이뻐요!!" time="15:06" user="안녕123"/>
          <BoardItem text="카이스트에 들르니 활짝 피어더라구요. 한번 구경들 오세요~" time="16:42" user="tellme09"/>
          <BoardItem text="여름이라 아주 더운데 강아지를 산책하기 아주 좋은 코스 추천드려요:)" time="17:08" user="hihi161718"/>
        </div>
      </section>
    </div>
  );
};

export default Main;
