import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BoardDetail from './components/BoardDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/board/:postId" element={<BoardDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
