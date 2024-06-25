import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const BoardWrit = () => {
  const navigate = useNavigate()

  const [write, setWrite] = useState({
    postId: '',
    title: '',
    content: '',
    author: '',
    // enum: ['freeboard', 'adoption', 'questions', 'boasts', 'recommendations'],
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
    await axios.post(`http://localhost:3000/freeboard`, write).then(() => {
      alert('등록 되었습니다.')
      navigate('/board')
    })
  }

  // const saveWrite = async () => {
  //   await axios({
  //     method: 'post',
  //     url: '`http://localhost:3000/board`, write',
  //     responseType: 'json',
  //   }).then(function () {
  //     alert('등록되었습니다.')
  //   })
  // }

  // -1(이전페이지) 잘 되는지 확인
  const backToList = () => {
    navigate('/freeboard')
  }

  return (
    <div>
      <form className="h-screen bg-[#FEDF78] p-28" action="http://localhost:3000/freeboard" method="post">
        {/* postId 사용했을 때 글쓸때 => postId 없고 수정할 때 => postId 있는지 확인  */}
        <h1 className="font-Point text-point text-2xl mb-10">{write.postId === '' ? '새 글 등록하기' : '수정하기'}</h1>
        <div className="flex">
          <div className="mt-3 mr-4">
            <button type="button">
              <img src="../../images/left-arrow.png" alt="뒤로가기 버튼" className="w-5 h-5" onClick={backToList} />
            </button>
          </div>
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
              {write.postId === '' ? '등록' : '수정'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default BoardWrit
