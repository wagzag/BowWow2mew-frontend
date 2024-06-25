import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Board from './Board'
import BoardWrite from './BoardWrite'

const BoardDetail = () => {
  // const navigate = useNavigate()

  const { postId } = useParams()

  const [board, setBoard] = useState({})

  console.log(board)

  // axios Ver.
  // const getBoard = async () => {
  //   const getData = await axios.get(`http://localhost:3000/freeboard/${postId}`).data
  //   setBoard(getData.data)
  // }

  // useEffect(() => {
  //   getBoard()
  // }, [])

  // const backToList = () => {
  //   navigate(-1)
  // }

  useEffect(() => {
    const getBoard = async () => {
      try {
        const response = await fetch(`http://localhost:3000/data/mockData.json`)
        console.log(response)
        if (!response.ok) {
          throw new Error('네트워크 응답이 정상이 아닙니다')
        }
        console.log(response)
        const data = await response.json()
        console.log(data)
        setBoard(data) // 서버에서 데이터를 받으면 `data`를 사용하여 상태를 설정
        console.log(board)
      } catch (error) {
        console.error('데이터를 불러오는 데 실패했습니다:', error)
      }
    }
    getBoard()
  }, [postId])

  return (
    <div>
      <Board postId={board.postId} title={board.title} content={board.content} />
    </div>
  )
}

export default BoardDetail
