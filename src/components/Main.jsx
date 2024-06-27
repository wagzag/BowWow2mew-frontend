import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
  const petImages = [
    "/images/pet1.jpeg",
    "/images/pet4.jpeg",
    "/images/pet5.jpeg",
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

  const HotIssueItem = ({ title, content, time }) => (
    <div className="p-4 border-2 bg-main rounded-xl border-point">
      <p className="font-bold">{title}</p>
      <p className="text-sm text-gray-700">{content}</p>
      <span className="text-xs text-gray-500">{time}</span>
    </div>
  );

  const BoardItem = ({ text, time, user }) => (
    <div className="flex items-center justify-between py-2 border-b border-font">
      <p className="flex-1">{text}</p>
      <div className="flex items-center space-x-6">
        <span className="text-s text-font font-regular">{time}</span>
        <span className="text-s text-font font-regular">{user}</span>
      </div>
    </div>
  );

  return (
    <div className="py-10 bg-main p-28">
      <div className="mb-10">
        <h2 className="mb-4 text-2xl font-Point text-point">금주의 반려동물</h2>
        <Slider {...sliderSettings}>
          {petImages.map((image, index) => (
            <div key={index} className="px-5">
              <img
                src={image}
                alt={`Weekly Pet ${index + 1}`}
                className="m-auto w-60 h-60 rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-Point text-point">Hot issue</h2>
        <div className="grid grid-cols-2 gap-4">
          <HotIssueItem
            title="저희 애가 사료를 안먹어요 ㅠㅠ"
            content="더위 먹었는건가요"
            time="19:54"
          />
          <HotIssueItem
            title="저희 강아지 귀여움 보고 ㄱㅏ세요"
            content="강아지.zip 🗂️"
            time="20:01"
          />
          <HotIssueItem
            title="날씨 더운데 그늘 많은 애견카페 추천해주세요 :) ☕🍹"
            content="🍹"
            time="20:08"
          />
          <HotIssueItem
            title="집이지만 아주 집에 가고싶은 심정입니다. 이럴 어떻게 해야 할까요?"
            content="보내줘"
            time="20:00"
          />
        </div>
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="mb-4 text-2xl font-Point text-point">자유 게시판</h2>
          <Link
            to="/freeboard"
            className="cursor-pointer text-font hover:text-gray-300"
          >
            더보기
          </Link>{" "}
        </div>
        <div className="space-y-4">
          <BoardItem
            text="저희 강아지 모음집입니다아"
            time="19:59"
            user="name"
          />
          <BoardItem
            text="베이글을 구워서 땅콩잼을 발라먹으니 아주 맛있네예"
            time="20:05"
            user="hihi1617"
          />
          <BoardItem
            text="요즘 오이🥒🥒 매우 맛있습니다 오이 극호"
            time="20:07"
            user="와그작"
          />
        </div>
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="mb-4 text-2xl font-Point text-point">
            입양 & 임시보호
          </h2>
          <Link
            to="/adoption"
            className="cursor-pointer text-font hover:text-gray-300"
          >
            더보기
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <img
            src="/images/pet2.jpeg"
            alt="입양 & 임시보호"
            className="rounded w-60 h-60"
          />
          <img
            src="/images/pet3.jpeg"
            alt="입양 & 임시보호"
            className="rounded w-60 h-60"
          />
          <img
            src="/images/pet6.jpeg"
            alt="입양 & 임시보호"
            className="rounded w-60 h-60"
          />
        </div>
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="mb-4 text-2xl font-Point text-point">고민 해결소</h2>
          <Link
            to="/questions"
            className="cursor-pointer text-font hover:text-gray-300"
          >
            더보기
          </Link>
        </div>
        <div className="space-y-4">
          <BoardItem
            text="저희 애가 사료를 안먹어요ㅠㅠ"
            time="19:54"
            user="name"
          />
          <BoardItem text="강아지 키울때" time="13:56" user="name" />
          <BoardItem
            text="집이지만 아주 집에 가고싶은 심정입니다. 이럴 어떻게 해야 할까요?"
            time="19:55"
            user="name"
          />
        </div>
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="mb-4 text-2xl font-Point text-point">추천 place</h2>
          <Link
            to="/recommendations"
            className="cursor-pointer text-font hover:text-gray-300"
          >
            더보기
          </Link>
        </div>
        <div className="space-y-4">
          {" "}
          <BoardItem
            text="카이스트에 들르니 활짝 피어더라구요. 한번 구경들 오세요~"
            time="19:59"
            user="name"
          />
          <BoardItem
            text="일일상 꿈결이 아주 이뻐요!!"
            time="20:02"
            user="안녕123"
          />
          <BoardItem
            text="여름이라 아주 더운데 강아지를 산책하기 아주 좋은 코스 추천드려요:)"
            time="20:04"
            user="hihi1617"
          />
        </div>
      </section>
    </div>
  );
};

export default Main;
