// 고민게시판
import React from 'react'
import BoardList from './Board/BoardList'

const QuestionsBoard = () => {
  return (
    <div>
      <div className="h-screen bg-[#FEDF78] p-28">
        <p className="font-Point text-point text-2xl mb-10">고민 해결소</p>
        <BoardList />
      </div>
    </div>
  )
}

export default QuestionsBoard
