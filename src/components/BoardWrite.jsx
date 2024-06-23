import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const BoardWrit = () => {
  const navigate = useNavigate()
  const [write, setWrite] = useState({
    title: '',
    content: '',
  })
  const { title, content } = write // 비구조화 할당
  console.log(write)

  const getBoardList = (e) => {
    const { value, name } = e.target
    setWrite({
      ...write,
      [name]: value,
    })
  }

  const saveWrite = async () => {
    await axios.post(`http://localhost:3000/freeboard`, write).then((res) => {
      alert('등록 되었습니다.')
      // navigate('/${}')
    })
  }

  // 취소버튼
  // const backToList = () => {
  //   navigate()
  // }

  return (
    <div>
      <div className="h-screen bg-[#FEDF78] p-28">
        <div>
          <input
            type="text"
            boardwrite
            placeholder="제목"
            name="title"
            value={title}
            onChange={getBoardList}
            className="w-full h-12 font-Regular bg-[#FFF0D4] mb-6 rounded-lg p-3"
          />
        </div>
        <div className="text-left">
          <textarea
            type="text"
            placeholder="내용"
            name="content"
            value={content}
            onChange={getBoardList}
            className="w-full h-80 font-Regular bg-[#FFF0D4] mb-3 rounded-lg p-3"
          />
        </div>

        <div>
          <input type="file" id="file" className="w-6/12" />
        </div>
        <div className="flex justify-end">
          <div className="bg-[#FFF0D4] absolute w-14 h-6 rounded-xl">
            <button type="button" className="font-Point relative -translate-x-1.5 ml-5" onClick={saveWrite}>
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardWrit
