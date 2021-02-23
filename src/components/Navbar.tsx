import React from 'react';
import styled from 'styled-components';
import Giffy_IMG from '../images/giffy.png';
import { primaryFont, typeScale } from '../utils/index';

const MainNavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 30vh;
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuContainer = styled.div`
  display: flex;
`;

const MenuEntry = styled.span`
  padding: 6px;
  font-family: ${primaryFont};
  font-size: ${typeScale.bodyIntroText};
  cursor: pointer;
`;

const LogoImg = styled.img`
  height: 168px;
  width: 150px;
`;

const Navbar: React.FC = () => {
  return (
    <MainNavbarContainer>
      <MainContentContainer>
        <LogoImg src={Giffy_IMG}></LogoImg>
        <MenuContainer>
          <MenuEntry>Home</MenuEntry>
          <MenuEntry>Log In</MenuEntry>
          <MenuEntry>Upload</MenuEntry>
          <MenuEntry>Create</MenuEntry>
        </MenuContainer>
      </MainContentContainer>
    </MainNavbarContainer>
  )
}

export default Navbar;