import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const BoardDetail = () => {
  const navigate = useNavigate()

  const [board, setboard] = useState({
    // postId,
    title,
    content,
  })
  console.log(board)

  useEffect(() => {
    fetch('http://localhost:3000/data/mockData.json')
      .then((res) => res.json())
      .then((res) => setboard(res.data))
    console.log(board)
  }, [])

  const { title, content } = board // 비구조화 할당

  // const getBoardList = (e) => {
  //   const { value, name } = e.target
  //   setboard({
  //     ...board,
  //     [name]: value,
  //   })
  // }

  const backToList = () => {
    navigate('/boardList')
  }

  return (
    <div>
      <div className="h-screen bg-[hsl(46,99%,73%)] p-28">
        <span className="hidden" key={board.postId}></span>
        <div>
          <input
            type="text"
            placeholder="제목"
            name="title"
            value={title}
            // onChange={setboard}
            className="w-full h-8 font-Regular bg-[#FFF0D4] mb-6 rounded-lg"
          >
            {board.title}
          </input>
        </div>
        <div>
          <input
            type="text"
            placeholder="내용"
            name="content"
            value={content}
            // onChange={setboard}
            className="w-full h-60 font-Regular bg-[#FFF0D4] mb-3 rounded-lg"
          >
            {board.content}
          </input>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="bg-[#FFF0D4] absolute w-[90px] h-6 rounded-xl"></div>
            <button type="button" className="font-Point relative translate-x-2.5" onClick={backToList}>
              게시글 목록
            </button>
          </div>
          <div className="flex justify-end">
            <div>
              <div className="bg-[#FFF0D4] absolute w-11 h-6 rounded-xl"></div>
              <button type="button" className="font-Point relative translate-x-2 mr-6">
                수정
              </button>
            </div>
            <div>
              <div className="bg-[#FFF0D4] absolute w-11 h-6 rounded-xl"></div>
              <button type="button" className="font-Point relative -translate-x-1 ml-3">
                삭제
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="font-Point mt-5">댓글</p>
          <input type="text" placeholder="댓글입력" className="w-full h-12 font-Regular bg-[#FFF0D4] rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default BoardDetail
