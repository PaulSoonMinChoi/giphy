import React from 'react';
import styled from 'styled-components';
import { GifDataEntry } from '../API';
import { primaryFont, textColors, typeScale, colors } from '../utils/index';

type Props = {
  data: GifDataEntry[];
  searchItem: string;
};

const MainContentContainer = styled.div`
  margin: 0 100px 100px;
  text-align: center;

  > span {
    font-size: ${typeScale.header3};
    font-family: ${primaryFont};
  }

  > p {
    font-size: ${typeScale.bodyText};
    font-family: ${primaryFont};
    margin: 5px 0 20px 0;
  }
`;

const GifContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    margin: 5px;
    transition: 0.5s all ease;

    &:hover {
      background: rgba(136, 160, 168, 0.5);
      box-shadow: 6px 11px 4px rgb(0 0 0 / 35%);
    }

    > img {
      cursor: pointer;
    }
  }
`;

const UsernameContainer = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  > span {
    color: ${textColors.dark};
    font-family: ${primaryFont};
    font-size: ${typeScale.bodyText};
    margin: 10px;
    cursor: pointer;
  }
`;

const MainContent: React.FC<Props> = ({ data, searchItem }) => {
  return (
    <MainContentContainer>
      <span>{searchItem ? searchItem : 'Trending'}</span>
      <p>
        {searchItem
          ? 'gifs'
          : 'Find all your favorite gifs or create your own!'}
      </p>
      <GifContainer>
        {data.map((gif: GifDataEntry) => {
          return (
            <div key={gif.id}>
              <img src={gif.images.fixed_height.url}></img>
              <UsernameContainer>
                <img
                  src={
                    gif.user
                      ? gif.user.avatar_url
                      : 'https://media0.giphy.com/avatars/default5.gif'
                  }></img>
                <span className='usename-Text'>
                  {gif.username ? gif.username : 'PaulChoi'}
                </span>
              </UsernameContainer>
            </div>
          );
        })}
      </GifContainer>
    </MainContentContainer>
  );
};

export default MainContent;
