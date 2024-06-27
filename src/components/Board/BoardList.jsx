import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const BoardList = (props) => {
  const [boardList, setBoardList] = useState([])
  // console.log(boardList)
  const navigate = useNavigate()
  // const getCategory = localStorage.getItem('category')

  // axios Ver.
  // const getBoardList = async () => {
  //   try {
  //     const getData = await axios.get('http://localhost:3000/freeboard')
  //     setBoardList(getData.data)
  //   } catch (error) {
  //     console.error('데이터를 가져오는 데 실패했습니다:', error)
  //   }
  // }

  // useEffect(() => {
  //   getBoardList()
  // }, [])

  // console.log(boardList)

  useEffect(() => {
    fetch('http://localhost:3000/data/mockData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setBoardList(res.data))
    // console.log(boardList)
  }, [])

  useEffect(() => {
    localStorage.setItem('category', JSON.stringify(props.boardType))
  }, [])

  // 로그인 유무에 따라 글쓰기 가능
  // const isLogin = window.localStorage.getItem(key)
  const boardWrite = () => {
    // if (isLogin === null) {
    //   navigate('/login')
    // } else {
    navigate(`/${props.boardType}/write`)
    // }
  }

  return (
    <div>
      <div className="bg-[#FEDF78]">
        <div>
          <div className="flex justify-around">
            <span className="hidden">체크</span>
            <span className="font-semibold">제목</span>
            <span className="font-semibold">날짜</span>
            <span className="font-semibold">이름</span>
          </div>
          <hr className="mt-2 bg-font min-h-[1px] border-0 h-0.5" />
        </div>
        <div>
          <ul>
            {boardList.map((data) => (
              <li key={data.postId} className="flex justify-around flex-col mt-2">
                <div className="flex justify-around">
                  <input type="checkbox" className="float-left" />
                  <Link to={`/${props.boardType}/${data.postId}`}>{data.title}</Link>
                  <span>{data.createdAt}</span>
                  <span>{data.name}</span>
                </div>
                <hr className="mt-2 bg-font min-h-[1px] border-0 h-0"></hr>
              </li>
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
