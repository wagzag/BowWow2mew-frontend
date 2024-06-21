import React from 'react'

const BoardWrite = () => {
  return (
    <div>
      <div className="h-screen bg-[#FEDF78] p-28">
        <div>
          <input type="text" placeholder="제목" className="w-full h-8 font-Regular bg-[#FFF0D4] mb-6 rounded-lg" />
        </div>
        <div>
          <input type="text" placeholder="내용" className="w-full h-60 font-Regular bg-[#FFF0D4] mb-3 rounded-lg" />
        </div>
        <div className="flex justify-between">
          <div>
            <div className="bg-[#FFF0D4] absolute w-[90px] h-6 rounded-xl"></div>
            <button type="button" className="font-Point relative translate-x-2.5">
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

export default BoardWrite
