import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const BoardList = () => {
  const [boardList, setBoardList] = useState([])
  const navigate = useNavigate()

  // axios Ver.
  const getBoardList = async () => {
    const getData = await (await axios.get('http://localhost:3000/freeboard')).data
    setBoardList(getData.data)
    console.log(boardList)
  }
  useEffect(() => {
    getBoardList()
  }, [])
  console.log(boardList)

  // useEffect(() => {
  //   fetch('http://localhost:3000/data/mockData.json')
  //     .then((res) => res.json())
  //     .then((res) => setBoardList(res.data))
  //   // console.log(boardList)
  // }, [])

  // console.log(boardList)

  // 로그인 유무에 따라 글쓰기 가능
  // const isLogin = window.localStorage.getItem(key)
  const boardWrite = () => {
    // if (isLogin === null) {
    //   navigate('/login')
    // } else {
    navigate('/boardWrite')
    // }
  }

  return (
    <div>
      <div className="bg-[#FEDF78]">
        <div>
          <div className="flex justify-around">
            <span className="font-semibold">체크</span>
            <span className="font-semibold">제목</span>
            <span className="font-semibold">날짜</span>
            <span className="font-semibold">이름</span>
          </div>
          <hr className="mt-2 bg-font min-h-[1px] border-0 h-0.5" />
        </div>
        <div>
          <ul>
            {boardList.map((data) => (
              <div className="flex justify-around flex-col mt-2">
                <div className="flex justify-around">
                  <span className="hidden" key={data.postId}></span>
                  <input type="checkbox" className="float-left" />
                  <Link to={`/freeboard/${data.postId}`}>{data.title}</Link>
                  <span>{data.createdAt}</span>
                  <span>{data.author}</span>
                </div>
                <hr className="mt-2 bg-font min-h-[1px] border-0 h-0"></hr>
              </div>
            ))}
          </ul>
          <div className="flex justify-end mt-3">
            <div className="bg-[#FFF0D4] absolute w-16 h-6 rounded-xl"></div>
            <button type="button" className="font-Point relative translate-x-2 mr-5 pointer" onClick={boardWrite}>
              글쓰기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardList
