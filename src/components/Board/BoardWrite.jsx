import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const BoardWrite = () => {
  const navigate = useNavigate()
  const { postId } = useParams() // URL에서 postId를 가져옴

  const [write, setWrite] = useState({
<<<<<<< HEAD
    // postId: postId || '', // postId가 있으면 수정, 없으면 새 글
    postId: 1,
=======
    postId: postId || '', // postId가 있으면 수정, 없으면 새 글
>>>>>>> board1
    title: '',
    content: '',
    userId: '',
    category: 'freeboard',
  })

<<<<<<< HEAD
=======
  // useEffect(() => {
  //   if (postId) {
  //     // postId가 있을 경우 기존 글 불러오기
  //     const fetchPost = async () => {
  //       try {
  //         const response = await axios.get(`http://localhost:3000/freeboard/${postId}`)
  //         setWrite(response.data)
  //       } catch (error) {
  //         console.error('글 불러오기에 실패했습니다:', error)
  //       }
  //     }
  //     fetchPost()
  //   }
  // }, [postId])

>>>>>>> board1
  useEffect(() => {
    if (postId) {
      // postId가 있을 경우 기존 글 불러오기
      const fetchPost = async () => {
        try {
<<<<<<< HEAD
          const response = await axios.get(`http://localhost:3000/freeboard/${postId}`)
          setWrite(response.data)
=======
          const response = await fetch(`http://localhost:3000/freeboard/${postId}`)
          if (!response.ok) {
            throw new Error('네트워크 응답이 정상이 아닙니다.')
          }
          const data = await response.json()
          setWrite(data)
>>>>>>> board1
        } catch (error) {
          console.error('글 불러오기에 실패했습니다:', error)
        }
      }
      fetchPost()
    }
  }, [postId])

  const { title, content, userId, category } = write
  console.log(write)

  const getBoardList = (e) => {
    const { value, name } = e.target
    setWrite({
      ...write,
      [name]: value,
    })
  }

  const saveWrite = async () => {
    try {
      if (postId) {
        // 수정하기
        await axios.put(`http://localhost:3000/freeboard/${postId}`, write)
        alert('수정 되었습니다.')
      } else {
        // 새 글 등록
        await axios.post('http://localhost:3000/freeboard', write)
        alert('등록 되었습니다.')
      }
      navigate('/freeboard')
    } catch (error) {
      console.error('글 등록에 실패했습니다:', error)
      alert('등록에 실패했습니다.')
    }
  }

  const backToList = () => {
    navigate('/freeboard')
  }

  return (
    <div>
      <form className="h-screen bg-[#FEDF78] p-28">
        <h1 className="font-Point text-point text-2xl mb-10">{postId ? '수정하기' : '새 글 등록하기'}</h1>
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
            onChange={getBoardList}
            className="w-full h-12 font-Regular bg-[#FFF0D4] mb-6 rounded-lg p-3"
          />
        </div>
        <div className="text-left">
          <textarea
            placeholder="내용"
            name="content"
            value={content}
            onChange={getBoardList}
            className="w-full h-80 font-Regular bg-[#FFF0D4] mb-3 rounded-lg p-3"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="작성자 이름"
            name="userId"
            value={userId}
            onChange={getBoardList}
            className="w-full h-12 font-Regular bg-[#FFF0D4] mb-6 rounded-lg p-3 hidden"
          />
        </div>
        <div>
          <input type="file" id="file" className="w-6/12" />
        </div>
        <div className="flex justify-end">
          <div className="bg-[#FFF0D4] absolute w-14 h-6 rounded-xl">
            <button type="button" className="font-Point relative -translate-x-1.5 ml-5" onClick={saveWrite}>
              {postId ? '수정' : '등록'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default BoardWrite
