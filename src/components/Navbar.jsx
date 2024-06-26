import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-main font-sans">
      <div className="flex justify-between items-center p-2.5 px-5 border-b border-main">
        <div className="text-2xl font-bold font-Point">
          <Link to="/" className="text-3xl text-point font-Point">
            멍멍냥냥
          </Link>
        </div>
        <div className="flex">
          <Link to="/login" className="text-customGreen hover:text-gray-300 font-Regular">
            Login
          </Link>

          <Link to="/join" className="ml-4 text-customGreen hover:text-gray-300 font-Regular">
            Join
          </Link>
        </div>
      </div>
      <div className="flex justify-center p-2.5 p-5">
        <div className="text-2xl flex">
          <Link to="/freeboard" className="mx-7 text-customGreen hover:text-gray-300 font-Point">
            자유 게시판
          </Link>
          <Link to="/adoption" className="mx-7 text-customGreen hover:text-gray-300 font-Point">
            입양 / 임시보호
          </Link>
          <Link to="/questions" className="mx-7 text-customGreen hover:text-gray-300 font-Point">
            고민 해결소
          </Link>
          <Link to="/boasts" className="mx-7 text-customGreen hover:text-gray-300 font-Point">
            자랑 게시판
          </Link>
          <Link to="/recommendations" className="mx-7 text-customGreen hover:text-gray-300 font-Point">
            추천 Place
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
