import React, { useState } from 'react';
import styled from 'styled-components';
import { GifDataEntry } from '../API';
import { primaryFont, textColors, typeScale, colors } from '../utils/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import checkMark from '../images/checkMark.svg';

type Props = {
  data: GifDataEntry[];
  searchItem: string;
};

const MainContentContainer = styled.div`
  margin: 0 100px 100px;
  text-align: center;

  > .title {
    font-size: ${typeScale.header3};
    font-family: ${primaryFont};
    margin-bottom: 5px;
    margin-top: 20px;
  }

  > .subtitleText {
    font-size: ${typeScale.bodyText};
    font-family: ${primaryFont};
    margin: 0 0 20px 0;
    color: #38474c;
  }
`;

const GifContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;

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
      @media (max-width: 580px) {
        max-width: 350px;
      }
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

const IconContainer = styled.div`
  position: relative;

  > .verified-icon {
    color: #18cdff;
  }

  > img {
    position: absolute;
    top: 6px;
    left: 4px;
  }
`;

const ExploreMoreTitle = styled.h1`
  text-align: center;
  border-bottom: 1px solid rgb(0 0 0 / 50%);
  line-height: 0.1em;

  > span {
    color: ${textColors.dark};
    font-size: ${typeScale.bodyIntroText};
    font-family: ${primaryFont};
    background: ${colors.secondary2};
    padding: 6px 15px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.5s all ease;

    &:hover {
      background: ${colors.tertiary1};
    }
  }
`;

const MainContent: React.FC<Props> = ({ data, searchItem }) => {
  const [gifCount, setGifCount] = useState(8);

  const isVerified = (user: boolean) => {
    if (user) {
      return (
        <IconContainer>
          <FontAwesomeIcon className='verified-icon' icon={faCertificate} />
          <img src={checkMark}></img>
        </IconContainer>
      );
    } else {
      return null;
    }
  };

  return (
    <MainContentContainer>
      <p className='title'>{searchItem ? searchItem : 'Trending'}</p>
      <p className='subtitleText'>
        {searchItem
          ? `${gifCount} GIFs`
          : 'Find all your favorite gifs or create your own!'}
      </p>
      <GifContainer>
        {data.slice(0, gifCount).map((gif: GifDataEntry) => {
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
                <span>{gif.username ? gif.username : 'PaulChoi'}</span>

                {gif.user ? isVerified(gif.user.is_verified) : null}
              </UsernameContainer>
            </div>
          );
        })}
      </GifContainer>
      <ExploreMoreTitle>
        <span onClick={() => setGifCount(gifCount * 2)}>Explore more</span>
      </ExploreMoreTitle>
    </MainContentContainer>
  );
};

export default MainContent;
