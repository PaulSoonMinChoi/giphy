import React from 'react';
import styled from 'styled-components';
import Giffy_IMG from '../images/giffy.png';
import { primaryFont, typeScale, colors } from '../utils/index';

const MainNavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 30vh;
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    height: 168px;
    width: 150px;
  }

  > div {
    display: flex;

    > span {
      margin: 10px;
      font-family: ${primaryFont};
      font-size: ${typeScale.bodyIntroText};
      cursor: pointer;
    }
  }

  > input {
    border: none;
    border-radius: 5px;
    outline: none;
    width: 300px;
    height: 30px;
    margin-top: 20px;
    font-family: ${primaryFont};
    font-size: ${typeScale.bodyText};
    padding: 3px;
    background-color: ${colors.secondary1}
  }
`;

const Navbar: React.FC = () => {
  return (
    <MainNavbarContainer>
      <MainContentContainer>
        <img src={Giffy_IMG}></img>
        <div>
          <span>Home</span>
          <span>Log In</span>
          <span>Upload</span>
          <span>Create</span>
        </div>
        <input placeholder="Search for gifs here"></input>
      </MainContentContainer>
    </MainNavbarContainer>
  )
}

export default Navbar;