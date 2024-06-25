import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token); // JWT 토큰을 로컬 스토리지에 저장
      setError('');
      navigate('/'); // 로그인 성공시 홈으로 이동
    } catch (error) {
      setError('이메일 또는 비밀번호를 잘못 입력했습니다');
    }
  };

  const handleGoToMainPage = () => {
    navigate('/'); // 메인 페이지로 이동
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FEDF78] font-Point">
      <button className="text-[#846144] text-5xl mb-6 focus:outline-none" onClick={handleGoToMainPage}>멍멍냥냥</button>
      <input
        className="w-80 h-12 p-3 mb-4 rounded-xl bg-[#FFF0D4] focus:outline-none text-[#39442D] text-sm"
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-80 h-12 p-3 mb-6 rounded-xl bg-[#FFF0D4] focus:outline-none text-[#39442D] text-sm"
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <button className="w-80 h-12 p-3 mb-4 rounded-xl bg-[#FFCB4F] text-[#39442D] text-lg focus:outline-none" onClick={handleLogin}>로그인</button>
      <button className="bg-[#FEDF78] text-sm text-black underline focus:outline-none" onClick={() => navigate('/join')}>회원가입</button>
    </div>
  );
};

export default LoginPage;
