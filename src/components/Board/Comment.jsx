import React, { useState } from "react";

const Comment = () => {
  const [commentList, setCommentList] = useState([]);
  const [content, setContent] = useState(""); //input값

  const saveComment = (e) => {
    setContent(e.target.value);
  };

  const pushCommentList = () => {
    setCommentList([
      ...commentList,
      {
        id: commentList.length + 1,
        user: "유저",
        content: content,
      },
    ]);
  };

  return (
    <div>
      {commentList.map((el, i) => {
        return (
          <div>
            <span key={el.id}>{el.user}</span>
            <span key={i}>{el.content}</span>
          </div>
        );
      })}
      <div>
        <input type="text" placeholder="댓글달기" onChange={saveComment} />
        <button type="button" onClick={pushCommentList}>
          게시
        </button>
      </div>
    </div>
  );
};

export default Comment;
