import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Board from './Board'

const BoardDetail = () => {
  // const navigate = useNavigate()

  const { postId } = useParams()

  const [board, setBoard] = useState({})
  console.log(board)

  // axios Ver.
  const getBoard = async () => {
    const getData = await (await axios.get(`http://localhost:3000/freeboard/${postId}`)).data
    setBoard(getData.data)
  }

  useEffect(() => {
    getBoard()
  }, [])

  // useEffect(() => {
  //   fetch(`http://localhost:3000/data/mockData.json`)
  //     .then((res) => res.json())
  //     .then((res) => setBoard(res.data))
  //   console.log(board)
  // }, [])

  // const backToList = () => {
  //   navigate(-1)
  // }

  return (
    <div>
      <Board postId={board.postId} title={board.title} content={board.content} />
    </div>
  )
}

export default BoardDetail
