import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BoardWrite from './components/BoardWrite'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/write" element={<BoardWrite />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
