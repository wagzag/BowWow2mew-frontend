import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({
      email: '',
      password: '',
      confirmPassword: ''
    });
    const navigate = useNavigate();
  
    const handleJoin = () => {
      const newErrors = {};
  
      // 이메일 형식 체크
      const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = '이메일 형식이 올바르지 않습니다.';
      }
  
      // 비밀번호 형식 체크
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}$/;
      if (!passwordRegex.test(password)) {
        newErrors.password = '비밀번호는 영문, 숫자, 특수문자의 조합으로 8~16자로 입력해주세요.';
      }
  
      // 비밀번호 일치 여부 체크
      if (password !== confirmPassword) {
        newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
      }
  
      // 에러가 있는지 확인
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
  
      // 여기에 회원가입 로직을 추가하세요
      if (name && email && password && confirmPassword && password === confirmPassword) {
        // 가입 성공 로직
        alert('가입이 완료되었습니다!');
        navigate('/login'); // 로그인 페이지로 이동
      } else {
        alert('입력한 정보를 다시 확인해주세요.');
      }
    };

    const handleGoToMainPage = () => {
        navigate('/'); // 메인 페이지로 이동
    };
  
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#FEDF78] font-Point">
          <button className="text-[#846144] text-5xl mb-6 focus:outline-none" onClick={handleGoToMainPage}>멍멍냥냥</button>
          <div className="text-[#846144] text-left text-lg mb-4 mr-60">회원가입</div>
          <input
            className="w-80 h-12 p-3 mb-4 rounded-xl bg-[#FFF0D4] focus:outline-none text-[#39442D] text-sm"
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={`w-80 h-12 p-3 mb-4 rounded-xl focus:outline-none text-[#39442D] text-sm ${errors.email ? 'border-red-500' : 'bg-[#FFF0D4]'} `}
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email}</p>}
          <input
            className={`w-80 h-12 p-3 mb-4 rounded-xl focus:outline-none text-[#39442D] text-sm ${errors.password ? 'border-red-500' : 'bg-[#FFF0D4]'} `}
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password}</p>}
          <input
            className={`w-80 h-12 p-3 mb-6 rounded-xl focus:outline-none text-[#39442D] text-sm ${errors.confirmPassword ? 'border-red-500' : 'bg-[#FFF0D4]'} `}
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mb-4">{errors.confirmPassword}</p>}
          <button className="w-80 h-12 p-3 mb-4 rounded-xl bg-[#FFCB4F] text-lg text-[#39442D] focus:outline-none" onClick={handleJoin}>가입하기</button>
          <div className="flex items-center">
            <p className="text-sm">이미 회원이세요?</p>
            <button className="ml-2 text-sm text-[#39442D] underline focus:outline-none" onClick={() => navigate('/login')}>로그인</button>
          </div>
        </div>
      );
    };
  
export default JoinPage;
