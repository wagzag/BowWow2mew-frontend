// 입양,임시보호 게시판
import React from 'react'
import BoardList from './Board/BoardList'
import BoardDetail from './Board/BoardDetail'

const AdoptionBoard = () => {
  return (
    <div>
      <div className="h-screen bg-[#FEDF78] p-28">
        <p className="font-Point text-point text-2xl mb-10">입양 / 임시보호</p>
        <BoardList boardType={'adoption'}>
          <BoardDetail boardType={'입양, 임시보호'} />
        </BoardList>
      </div>
    </div>
  )
}

export default AdoptionBoard
