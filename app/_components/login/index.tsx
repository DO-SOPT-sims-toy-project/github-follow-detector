/** @jsxImportSource @emotion/react */

'use client';

import * as S from './style';

import { useRouter } from 'next/navigation';

import Button from '../common/Button';
import { FormEvent } from 'react';
import { css } from '@emotion/react';
import { useState } from 'react';

/** GitHub Token 만들러 가기 버튼 */
const MakeGitHubToken = () => {
  return (
    <Button>
      <a href="https://github.com/settings/tokens" target="_blank">
        GitHub Token 만들러 가기
      </a>
    </Button>
  );
};

/** 나의 맞팔 확인하기 Form */
const LoginForm = () => {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/list?token=' + token + '&username=' + username);
  };

  return (
    <S.LoginFormWrapper onSubmit={handleSubmit}>
      <S.FormInput
        type="text"
        placeholder="GitHub Token을 입력해주세요"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <S.FormInput
        type="text"
        placeholder="GitHub username을 입력해주세요"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button type="submit">나의 맞팔 확인하기</Button>
    </S.LoginFormWrapper>
  );
};

/** GitHub Login 버튼 */
const CheckWithLogin = () => {
  return (
    <S.CheckWithLoginWrapper>
      <span css={textStyle}>GitHub 로그인으로 간단하게 확인하기 &rarr;</span>
      <Button>GitHub 로그인</Button>
    </S.CheckWithLoginWrapper>
  );
};

/** 시작 화면 - Token 입력창 */
const Login = () => {
  return (
    <S.LoginContainer>
      <MakeGitHubToken />
      <p css={textStyle}>!토큰 발급시 권한 user(Update ALL user data)를 체크해주세요!</p>
      <LoginForm />
      <CheckWithLogin />
    </S.LoginContainer>
  );
};

export default Login;

const textStyle = css`
  font-size: 1.4rem;
  margin: 0.5rem 0;
`;
