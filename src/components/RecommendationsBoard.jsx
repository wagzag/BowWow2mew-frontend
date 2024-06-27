// 고민게시판
import React from "react";
import BoardList from "./Board/BoardList";
import BoardDetail from "./Board/BoardDetail";

const RecommendationsBoard = () => {
  return (
    <div>
      <div className="h-screen bg-[#FEDF78] p-28">
        <p className="mb-10 text-2xl font-Point text-point">추천 Place</p>
        <BoardList boardType={"recommendations"}>
          <BoardDetail />
        </BoardList>
      </div>
    </div>
  );
};

export default RecommendationsBoard;
