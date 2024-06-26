import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Board = ({ postId, title, content, userId }) => {
  const navigate = useNavigate()

  const getUserId = localStorage.getItem('userId')
  const today = new Date()
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분`

  // 댓글
  const [commentList, setCommentList] = useState([])
  const [comment, setComment] = useState('') //input값

  const saveComment = (e) => {
    setComment(e.target.value)
    e.preventDefault()
  }

  const pushCommentList = () => {
    setCommentList([
      ...commentList,
      {
        userId: getUserId,
        // userId: '이름1',
        // createdAt: today,
        createdAt: formattedDate,
        comment: comment,
      },
    ])
    setComment('')
  }

  // const [data, setData] = useState({
  //   postId: postId,
  //   title: title,
  //   content: content,
  //   userId: userId,
  // })

  const backToList = () => {
    navigate('/freeboard')
  }

  const boardEdit = () => {
    navigate('/update/' + postId)
  }

  const boardDelete = async () => {
    try {
      if (window.confirm('게시글을 삭제하시겠습니까?')) {
        await axios
          .delete(`http://localhost:3000/data/mockData.json`, {
            data: {
              postId: postId,
              title: title,
              content: content,
              userId: userId,
            },
          })
          // const data = response.data
          // setData(data.data)
          // .then((data) => console.log(data.data))
          .then(alert('삭제 되었습니다.'))
        navigate('/freeboard')
      }
    } catch (error) {
      console.error('데이터를 삭제하는데 실패했습니다:', error)
    }
  }

  return (
    <div>
      <div>
        <div className="bg-[hsl(46,99%,73%)] p-28 h-screen">
          <span className="hidden" key={postId}></span>
          <span className="hidden">{userId}</span>
          <div>
            <p className="w-full h-10 font-Regular bg-[#FFF0D4] mb-6 rounded-lg p-2">{title}</p>
          </div>
          <div>
            <p className="w-full h-60 font-Regular bg-[#FFF0D4] mb-3 rounded-lg p-2">{content}</p>
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
                <button type="button" className="font-Point relative translate-x-2 mr-6" onClick={boardEdit}>
                  수정
                </button>
              </div>
              <div>
                <div className="bg-[#FFF0D4] absolute w-11 h-6 rounded-xl"></div>
                <button type="button" className="font-Point relative -translate-x-1 ml-3" onClick={boardDelete}>
                  삭제
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="font-Point mt-5 mb-3">댓글</p>
            <input
              type="text"
              placeholder="댓글입력"
              className="w-full h-12 font-Regular bg-[#FFF0D4] rounded-lg p-3"
              value={comment}
              onChange={saveComment}
            />
            <div className="flex justify-end mt-4">
              <div className="bg-[#FFF0D4] absolute w-11 h-6 rounded-xl"></div>
              <button type="button" className="font-Point relative -translate-x-2.5 ml-3" onClick={pushCommentList}>
                등록
              </button>
            </div>
            {commentList.map((el, i) => {
              return (
                <div className="mt-5">
                  <div className="flex justify-between mb-2">
                    <span key={el.id} className="font-Point">
                      {el.userId}
                    </span>
                    <span>{el.createdAt}</span>
                  </div>
                  <span key={i}>{el.comment}</span>
                  <hr className="mt-2 bg-font min-h-[1px] border-0 h-0" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board
