import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { get } from "../../api";

const BoardList = (props) => {
  const [boardList, setBoardList] = useState([]);
  const navigate = useNavigate();

  const getBoard = async () => {
    const boardType = window.location.pathname.split("/")[1];
    const res = await get(`/${boardType}`);
    setBoardList(res.data);
  };

  useEffect(() => {
    getBoard();
  }, []);

  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(props.boardType));
  }, []);

  // 로그인 유무에 따라 글쓰기 가능
  const boardWrite = () => {
    const boardType = window.location.pathname.split("/")[1];
    if (!localStorage.getItem("token")) {
      alert("로그인이 필요한 기능입니다!");
      navigate("/login");
    }
    navigate(`/${boardType}/write`);
  };

  return (
    <div>
      <div className="bg-[#FEDF78]">
        <div>
          <div className="flex justify-around">
            <span className="hidden">체크</span>
            <span className="font-semibold">제목</span>
            <span className="font-semibold">날짜</span>
            <span className="font-semibold">이름</span>
          </div>
          <hr className="mt-2 bg-font min-h-[1px] border-0 h-0.5" />
        </div>
        <div>
          <ul>
            {boardList.length > 0 &&
              boardList.map((data) => (
                <li
                  key={data.postId}
                  className="flex flex-col justify-around mt-2"
                >
                  <div className="flex justify-around">
                    <input type="checkbox" className="float-left" />
                    <Link to={`/${props.boardType}/${data.postId}`}>
                      {data.title}
                    </Link>
                    <span>{data.createdAt}</span>
                    <span>{data.userName}</span>
                  </div>
                  <hr className="mt-2 bg-font min-h-[1px] border-0 h-0"></hr>
                </li>
              ))}
          </ul>
          <div className="flex justify-end mt-3">
            <div className="bg-[#FFF0D4] absolute w-16 h-6 rounded-xl"></div>
            <button
              type="button"
              className="relative mr-5 translate-x-2 font-Point pointer"
              onClick={boardWrite}
            >
              글쓰기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardList;
