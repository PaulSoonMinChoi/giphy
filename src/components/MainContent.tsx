import React from 'react';
import styled from 'styled-components';

type TrendingData = {

}

const MainContentContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60vh;
  background-color: lightpink;
`;

const MainContent: React.FC = () => {
  return (
    <MainContentContainer>
      This is the Main Content
    </MainContentContainer>
  )
}

export default MainContent;