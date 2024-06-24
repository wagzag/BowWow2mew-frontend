import BoardDetail from './components/BoardDetail'
import BoardList from './components/BoardList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/board" element={<BoardList />} />
        <Route path="/board/:postId" element={<BoardDetail />} />
      </Routes>
    </Router>
  )
}

export default App
