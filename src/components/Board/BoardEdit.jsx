import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const BoardEdit = () => {
  const navigate = useNavigate()
  const { postId } = useParams()
  const getUserId = localStorage.getItem('userId')

  const [board, setBoard] = useState({
    title: '',
    content: '',
    userId: getUserId,
  })

  const { title, content, userId } = board

  const onChange = (e) => {
    const { value, name } = e.target
    setBoard({
      ...board,
      [name]: value,
    })
  }
  // console.log(board)

  useEffect(() => {
    const getBoard = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data/mockData.json')
        const data = response.data
        setBoard(data.data.filter((e) => e.postId === postId)[0])
      } catch (error) {
        console.error('데이터를 불러오는 데 실패했습니다:', error)
      }
    }
    getBoard()
  }, [postId])

  const editBoard = async () => {
    try {
      const response = await axios.put('http://localhost:3000/data/mockData.json')
      const data = response.data
      setBoard(data.data)
      console.log('data', data)
    } catch (error) {
      console.error('데이터를 보내지 못하였습니다.', error)
    }
  }

  const backToList = () => {
    navigate('/freeboard')
  }

  return (
    <div>
      <form className="h-screen bg-[#FEDF78] p-28">
        <h1 className="font-Point text-point text-2xl mb-10">수정하기</h1>
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
            readOnly={true}
            className="w-full h-12 font-Regular bg-[#FFF0D4] mb-6 rounded-lg p-3 hidden"
          />
        </div>
        <div>
          <input type="file" id="file" className="w-6/12" />
        </div>
        <div className="flex justify-end">
          <div className="bg-[#FFF0D4] absolute w-14 h-6 rounded-xl">
            <button type="submit" className="font-Point relative -translate-x-1.5 ml-5" onClick={editBoard}>
              수정
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default BoardEdit
