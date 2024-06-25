// 자유게시판
import React from 'react'
import BoardList from './Board/BoardList'
import BoardDetail from './Board/BoardDetail'
// import { Link } from 'react-router-dom'

const FreeBoard = () => {
  return (
    <div>
      <div className="h-screen bg-[#FEDF78] p-28">
        <p className="font-Point text-point text-2xl mb-10">자유 게시판</p>
        <BoardList>
          <BoardDetail />
        </BoardList>
      </div>
    </div>
  )
}

export default FreeBoard
