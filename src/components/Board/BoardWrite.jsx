import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authPost } from "../../api";

const BoardWrite = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [write, setWrite] = useState({
    title: "",
    content: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setWrite({
      ...write,
      [name]: value,
    });
  };

  const saveBoard = async (e) => {
    e.preventDefault();
    const boardType = window.location.pathname.split("/")[1];

    const { data } = await authPost(`/${boardType}`, {
      title: write.title,
      content: write.content,
      userId,
    });

    navigate(`/${boardType}/${data.postId}`);
  };

  const backToList = () => {
    const boardType = window.location.pathname.split("/")[1];
    navigate(`/${boardType}`);
  };

  return (
    <div>
      <form className="bg-[#FEDF78] p-28 h-screen">
        <h1 className="mb-10 text-2xl font-Point text-point">새 글 등록하기</h1>
        <div className="flex">
          <div className="mt-3 mr-4">
            <button type="button" onClick={backToList}>
              <img
                src="../../images/left-arrow.png"
                alt="뒤로가기 버튼"
                className="w-5 h-5"
              />
            </button>
          </div>
          <input
            type="text"
            placeholder="제목"
            name="title"
            value={write.title}
            onChange={onChange}
            className="w-full h-12 font-Regular bg-[#FFF0D4] mb-6 rounded-lg p-3"
          />
        </div>
        <div className="text-left">
          <textarea
            placeholder="내용"
            name="content"
            value={write.content}
            onChange={onChange}
            className="w-full h-80 font-Regular bg-[#FFF0D4] mb-3 rounded-lg p-3"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="작성자 이름"
            name="userId"
            value={userId}
            onChange={onChange}
            className="w-full h-12 font-Regular bg-[#FFF0D4] mb-6 rounded-lg p-3 hidden"
          />
        </div>
        {/* <div>
          <input type="file" id="file" className="w-6/12" />
        </div> */}
        <div className="flex justify-end">
          <div className="bg-[#FFF0D4] absolute w-14 h-6 rounded-xl">
            <button
              type="submit"
              className="font-Point relative -translate-x-1.5 ml-5"
              onClick={saveBoard}
            >
              등록
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BoardWrite;
