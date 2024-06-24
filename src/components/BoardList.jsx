import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const BoardList = () => {
  const [boardList, setBoardList] = useState([])

  // let { params } = useParams()

  // console.log(params)

  // axios Ver.
  // const getBoardList = async() => {
  //   const getData = await (await axios.get('http://localhost:3000/게시판이름')).data;
  //   setBoardList(getData.data);
  //   console.log(boardList);
  // }
  // useEffect(() => {
  //   getBoardList();
  // }, []);
  // console.log(boardList)

  useEffect(() => {
    fetch('http://localhost:3000/data/mockData.json')
      .then((res) => res.json())
      .then((res) => setBoardList(res.data))
    console.log(boardList)
  }, [])

  console.log(boardList)

  return (
    <div>
      <div className="h-screen bg-[#FEDF78] p-28">
        <div>
          <p className="font-Point text-point text-2xl mb-10">자유 게시판</p>
        </div>
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
                  <Link to={`/board/${data.postId}`}>{data.title}</Link>
                  <span>{data.createdAt}</span>
                  <span>{data.author}</span>
                </div>
                <hr className="mt-2 bg-font min-h-[1px] border-0 h-0"></hr>
              </div>
            ))}
          </ul>
        </div>
        {/* <hr className="mt-2 bg-font min-h-[1px] border-0 h-0"></hr> */}
      </div>
    </div>
  )
}

export default BoardList
