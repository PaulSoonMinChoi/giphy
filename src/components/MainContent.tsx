import React from 'react';
import styled from 'styled-components';
import { GifDataEntry } from '../API';
import { primaryFont } from '../utils/index'

type Props = {
  data: GifDataEntry[]
}

const MainContentContainer = styled.div`
  background-color: lightpink;
  padding: 20px;
`;

const GifContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GifEntry = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

const UsernameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const UsernameAvatar = styled.img`
  width: 50px;
  height: 50px;
`;

const UsernameText = styled.span`
  color: black;
  font-family: ${primaryFont};
`;

const MainContent: React.FC<Props> = ({ data }) => {
  return (
    <MainContentContainer>
      <GifContainer>
        {data.map((gif: GifDataEntry) => {
          return (
            <GifEntry key={gif.id} >
              <img src={gif.images.fixed_height.url}></img>
              <UsernameContainer>
                <UsernameAvatar src={gif.user ? gif.user.avatar_url : 'https://media0.giphy.com/avatars/default5.gif'}></UsernameAvatar>
                <UsernameText>{gif.username}</UsernameText>
              </UsernameContainer>
            </GifEntry>
          )
        })}
      </GifContainer>
    </MainContentContainer>
  )
}

export default MainContent;