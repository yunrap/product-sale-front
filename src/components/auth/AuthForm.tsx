import { useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthType, LoginType, RegisterType } from 'types/ConstType';
import axios from 'axios';
import { PROXY } from 'utils/apiConfig';
import { setCookie } from 'utils/cookie';

/**
 * 회원가입 또는 로그인 폼
 *
 */

const AuthForm = ({ type }: AuthType) => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');
  const [loginForm, setLoginForm] = useState<LoginType>({
    id: '',
    password: '',
  });
  const [registerForm, setRegisterForm] = useState<RegisterType>({
    userId: '',
    userName: '',
    userPassword: '',
    userEmail: '',
  });

  const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleRegisterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const getLogin = () => {
    axios
      .post(`${PROXY}/login`, loginForm)
      .then((res) => {
        const { accessToken } = res.data;
        setCookie('accessToken', accessToken, { path: '/' });
        navigate('/');
      })
      .catch((error) => {
        if (error.response.data.status === 500) {
          setErrorMsg('아이디 또는 비밀번호가 틀렸습니다.');
        }
      });
  };

  const validation = () => {
    if (registerForm.userId === '') {
      alert('아이디를 입력해주세요');
      return false;
    }

    if (registerForm.userEmail === '') {
      alert('이메일을 입력해주세요');
      return false;
    }

    if (registerForm.userPassword === '') {
      alert('비밀번호 입력해주세요');
      return false;
    }

    if (registerForm.userName === '') {
      alert('이름을 입력해주세요');
      return false;
    }

    if (registerForm.userId === '') {
      alert('아이디를 입력해주세요');
      return false;
    }

    return true;
  };

  const getRegister = () => {
    if (!validation()) return;

    axios
      .post(`${PROXY}/api/user/join`, registerForm)
      .then((res) => {
        navigate('/');
      })
      .catch((e) => {
        if (e.response.data.status === 500) {
          alert(e.response.data.detail);
        }
        console.error(e);
        alert('Error데이터를 불러올 수 없습니다');
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const buttonType = e.nativeEvent.submitter.name;
    if (buttonType === 'signUp') {
      getRegister();
    } else if (buttonType === 'login') {
      getLogin();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-sm shadow-sm">
      <div className="mb-8 text-center">
        <h1 className="font-inter font-semibold text-2xl text-neutral-900 mb-2">
          {type === 'register' ? '회원가입' : '로그인'}
        </h1>
        <p className="font-poppins font-regular text-base text-neutral-600">
          {type === 'register' ? '회원정보를 입력해주세요' : 'Enter your details below'}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {type === 'login' && (
          <>
            <div>
              <input
                name="id"
                placeholder="아이디"
                value={loginForm.id}
                onChange={handleLoginInput}
                className="w-full border-0 border-b border-neutral-300 pb-2 font-poppins font-regular text-base text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                required
              />
            </div>
            <div>
              <input
                name="password"
                placeholder="비밀번호"
                type="password"
                value={loginForm.password}
                onChange={handleLoginInput}
                className="w-full border-0 border-b border-neutral-300 pb-2 font-poppins font-regular text-base text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                required
              />
            </div>
          </>
        )}
        {type === 'register' && (
          <>
            <div>
              <input
                name="userId"
                placeholder="아이디"
                value={registerForm.userId}
                onChange={handleRegisterInput}
                className="w-full border-0 border-b border-neutral-300 pb-2 font-poppins font-regular text-base text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                required
              />
            </div>
            <div>
              <input
                name="userPassword"
                placeholder="비밀번호"
                type="password"
                value={registerForm.userPassword}
                onChange={handleRegisterInput}
                className="w-full border-0 border-b border-neutral-300 pb-2 font-poppins font-regular text-base text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                required
              />
            </div>
            <div>
              <input
                name="userEmail"
                placeholder="이메일"
                type="email"
                value={registerForm.userEmail}
                onChange={handleRegisterInput}
                className="w-full border-0 border-b border-neutral-300 pb-2 font-poppins font-regular text-base text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                required
              />
            </div>
            <div>
              <input
                name="userName"
                placeholder="이름"
                value={registerForm.userName}
                onChange={handleRegisterInput}
                className="w-full border-0 border-b border-neutral-300 pb-2 font-poppins font-regular text-base text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none transition-colors duration-200"
                required
              />
            </div>
          </>
        )}
        
        {errorMsg && (
          <div className="text-red-500 font-poppins font-regular text-sm text-center">
            {errorMsg}
          </div>
        )}
        
        <div className="pt-4">
          {type === 'register' ? (
            <button
              type="submit"
              name="signUp"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-poppins font-medium text-base py-3 rounded-sm transition-colors duration-200"
            >
              회원가입
            </button>
          ) : (
            <button
              type="submit"
              name="login"
              disabled={loginForm.id.length === 0 || loginForm.password.length === 0}
              className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-300 disabled:cursor-not-allowed text-white font-poppins font-medium text-base py-3 rounded-sm transition-colors duration-200"
            >
              로그인
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
