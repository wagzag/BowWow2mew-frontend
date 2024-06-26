import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Board from './Board'

const BoardDetail = () => {
  const { postId } = useParams()
  const [board, setBoard] = useState({})

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

  return (
    <div>
      <Board postId={board.postId} title={board.title} content={board.content} />
    </div>
  )
}

export default BoardDetail
