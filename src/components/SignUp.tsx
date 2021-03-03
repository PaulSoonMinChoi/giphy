import React, { FormEvent, useRef } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContexts';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20%;
`;

const SignUp: React.FC = (): JSX.Element => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { signUp } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void | null => {
    e.preventDefault();
    console.log(e);
    console.log(signUp);

    // if (!!emailRef.current && !!passwordRef.current) {
    //   signUp!(emailRef.current.value, passwordRef.current.value);
    // } else {
    //   return null;
    // }
  };

  return (
    <SignUpContainer>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='email'>Email:</label>
        <input type='email' ref={emailRef}></input>
        <label htmlFor='password'>Password:</label>
        <input type='password' ref={passwordRef}></input>
        <button type='submit'>submit</button>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
