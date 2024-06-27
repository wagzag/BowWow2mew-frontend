// 입양,임시보호 게시판
import React from "react";
import BoardList from "./Board/BoardList";
import BoardDetail from "./Board/BoardDetail";

const BoastsBoard = () => {
  return (
    <div>
      <div className="h-screen bg-[#FEDF78] p-28">
        <p className="mb-10 text-2xl font-Point text-point">자랑 게시판</p>
        <BoardList boardType={"boasts"}>
          <BoardDetail />
        </BoardList>
      </div>
    </div>
  );
};

export default BoastsBoard;
