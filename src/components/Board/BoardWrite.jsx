import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const BoardWrite = () => {
  const navigate = useNavigate()
  // const { postId } = useParams() // URL에서 postId를 가져옴
  const getUserId = localStorage.getItem('userId')
  const getCategory = localStorage.getItem('category')

  const [write, setWrite] = useState({
    title: '',
    content: '',
    userId: getUserId,
    category: getCategory,
  })

  const { title, content, userId, category } = write

  const onChange = (e) => {
    const { value, name } = e.target
    setWrite({
      ...write,
      [name]: value,
    })
  }

  const saveBoard = async () => {
    try {
      const response = await axios.post('http://localhost:3000/data/mockData.json')
      const data = response.data
      setWrite(data.data)
      console.log('write', write)
    } catch (error) {
      console.error('데이터를 보내지 못하였습니다.', error)
      alert('게시글이 등록되었습니다.')
    }
  }

  // console.log(write)

  const backToList = () => {
    navigate('/freeboard')
  }

  return (
    <div>
      <form className="bg-[#FEDF78] p-28 h-screen">
        <h1 className="font-Point text-point text-2xl mb-10">새 글 등록하기</h1>
        <div className="flex">
          <div className="mt-3 mr-4">
            <button type="button" onClick={backToList}>
              <img src="../../images/left-arrow.png" alt="뒤로가기 버튼" className="w-5 h-5" />
            </button>
          </div>
          <input
            type="text"
            placeholder="제목"
            name="title"
            value={title}
            onChange={onChange}
            className="w-full h-12 font-Regular bg-[#FFF0D4] mb-6 rounded-lg p-3"
          />
        </div>
        <div className="text-left">
          <textarea
            placeholder="내용"
            name="content"
            value={content}
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
        <div>
          <input type="file" id="file" className="w-6/12" />
        </div>
        <div className="flex justify-end">
          <div className="bg-[#FFF0D4] absolute w-14 h-6 rounded-xl">
            <button type="submit" className="font-Point relative -translate-x-1.5 ml-5" onClick={saveBoard}>
              등록
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default BoardWrite
