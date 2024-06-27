import React, { useState, useEffect } from "react";
import { get } from "../../api";
import { useParams } from "react-router-dom";
import Board from "./Board";

const BoardDetail = () => {
  const { postId } = useParams();
  const [board, setBoard] = useState({});

  useEffect(() => {
    const boardType = window.location.pathname.split("/")[1];
    const getBoard = async () => {
      try {
        const res = await get(`/${boardType}/${postId}`);
        setBoard(res.data);
      } catch (error) {
        console.error("데이터를 불러오는 데 실패했습니다:", error);
      }
    };
    getBoard();
  }, [postId]);

  return (
    <div>
      <Board
        postId={board.postId}
        title={board.title}
        content={board.content}
      />
    </div>
  );
};

export default BoardDetail;
