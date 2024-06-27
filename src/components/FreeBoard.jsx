// 자유게시판
import React from "react";
import BoardList from "./Board/BoardList";
import BoardDetail from "./Board/BoardDetail";
// import { Link } from 'react-router-dom'

const FreeBoard = () => {
  return (
    <div>
      <div className="h-screen bg-[#FEDF78] p-28">
        <p className="mb-10 text-2xl font-Point text-point">자유 게시판</p>
        <BoardList boardType="freeboard">
          <BoardDetail />
        </BoardList>
      </div>
    </div>
  );
};

export default FreeBoard;
