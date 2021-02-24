import React from 'react';
import styled from 'styled-components';
import { GifDataEntry } from '../API';
import { primaryFont, textColors, typeScale, colors } from '../utils/index';

type Props = {
  data: GifDataEntry[]
}

const MainContentContainer = styled.div`
  padding: 20px;
`;

const GifContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    margin: 5px;
  }
`;

const UsernameContainer = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 50px;
    height: 50px;
  }

  > span {
    color: ${textColors.dark};
    font-family: ${primaryFont};
    font-size: ${typeScale.bodyText};
    cursor: pointer;
    margin: 10px;
  }
`;

const MainContent: React.FC<Props> = ({ data }) => {
  return (
    <MainContentContainer>
      <GifContainer>
        {data.map((gif: GifDataEntry) => {
          return (
            <div key={gif.id} >
              <img src={gif.images.fixed_height.url}></img>
              <UsernameContainer>
                <img src={gif.user ? gif.user.avatar_url : 'https://media0.giphy.com/avatars/default5.gif'}></img>
                <span className="usename-Text">{gif.username}</span >
              </UsernameContainer>
            </div>
          )
        })}
      </GifContainer>
    </MainContentContainer>
  )
}

export default MainContent;