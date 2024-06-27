import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { del, authPost, get } from "../../api";

const Board = ({ postId, title, content }) => {
  const navigate = useNavigate();
  const boardType = window.location.pathname.split("/")[1];
  const getUserId = localStorage.getItem("userId");
  const getCategory = JSON.parse(localStorage.getItem("category"));
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분`;

  // 댓글
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState(""); //input값

  const saveComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  useEffect(() => {
    const getCommentList = async () => {
      const { data } = await get(`/comments?postId=${postId}`);
      setCommentList(data.data);
    };

    getCommentList();
  }, [postId]);

  const pushCommentList = async () => {
    await authPost(`/comments?postId=${postId}&category=${boardType}`, {
      content: comment,
    });
    const { data } = await get(`/comments?postId=${postId}`);
    setCommentList(data.data);
    setComment("");
  };

  const backToList = () => {
    navigate(`/${boardType}`);
  };

  const boardEdit = () => {
    navigate(`/${boardType}/${postId}/edit`);
  };

  const boardDelete = async () => {
    try {
      if (window.confirm("게시글을 삭제하시겠습니까?")) {
        await del(`/${boardType}/${postId}`);

        navigate(`/${boardType}`);
      }
    } catch (error) {
      console.error("데이터를 삭제하는데 실패했습니다:", error);
    }
  };

  return (
    <div>
      <div>
        <div className="bg-[hsl(46,99%,73%)] p-28 h-screen">
          <span className="hidden" key={postId}></span>
          {/* <span className="hidden">{userId}</span> */}
          <div>
            <p className="w-full h-10 font-Regular bg-[#FFF0D4] mb-6 rounded-lg p-2">
              {title}
            </p>
          </div>
          <div>
            <p className="w-full h-60 font-Regular bg-[#FFF0D4] mb-3 rounded-lg p-2">
              {content}
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="bg-[#FFF0D4] absolute w-[90px] h-6 rounded-xl"></div>
              <button
                type="button"
                className="font-Point relative translate-x-2.5"
                onClick={backToList}
              >
                게시글 목록
              </button>
            </div>
            <div className="flex justify-end">
              <div>
                <div className="bg-[#FFF0D4] absolute w-11 h-6 rounded-xl"></div>
                <button
                  type="button"
                  className="relative mr-6 translate-x-2 font-Point"
                  onClick={boardEdit}
                >
                  수정
                </button>
              </div>
              <div>
                <div className="bg-[#FFF0D4] absolute w-11 h-6 rounded-xl"></div>
                <button
                  type="button"
                  className="relative ml-3 -translate-x-1 font-Point"
                  onClick={boardDelete}
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-5 mb-3 font-Point">댓글</p>
            <input
              type="text"
              placeholder="댓글입력"
              className="w-full h-12 font-Regular bg-[#FFF0D4] rounded-lg p-3"
              value={comment}
              onChange={saveComment}
            />
            <div className="flex justify-end mt-4">
              <div className="bg-[#FFF0D4] absolute w-11 h-6 rounded-xl"></div>
              <button
                type="button"
                className="font-Point relative -translate-x-2.5 ml-3"
                onClick={pushCommentList}
              >
                등록
              </button>
            </div>
            {commentList.map((el, i) => {
              return (
                <div className="mt-5" key={el + i}>
                  <div className="flex justify-between mb-2">
                    <span className="font-Point">{el.userName}</span>
                    <span>{el.createdAt}</span>
                  </div>
                  <span key={i}>{el.content}</span>
                  <hr className="mt-2 bg-font min-h-[1px] border-0 h-0" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
