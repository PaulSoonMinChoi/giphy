import React from 'react';
import styled from 'styled-components';
import Giffy_IMG from '../images/giffy.png';

const MainNavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 30vh;
  background-color: lightblue;
`;

const LogoImg = styled.img`
  height: 168px;
  width: 150px;
`;

const Navbar: React.FC = () => {
  return (
    <MainNavbarContainer>
      <LogoImg src={Giffy_IMG}></LogoImg>
    </MainNavbarContainer>
  )
}

export default Navbar;