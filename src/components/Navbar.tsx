import React, { useState, Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { API_KEY, GifDataEntry } from '../API';
import styled from 'styled-components';
import Giffy_IMG from '../images/giffy.png';
import searchIcon from '../images/searchIcon.svg';
import { primaryFont, typeScale, colors } from '../utils/index';

type Props = {
  setGifData: Dispatch<SetStateAction<GifDataEntry[]>>;
  setSearchItem: Dispatch<SetStateAction<string>>;
  fetchTrendingGifData: () => Promise<void>;
};

type OverlayProps = {
  active: boolean;
};

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
    cursor: pointer;
  }

  > .menu-list {
    display: flex;

    > span {
      margin: 10px;
      font-family: ${primaryFont};
      font-size: ${typeScale.bodyIntroText};
      cursor: pointer;
    }
  }
`;

const SearchBarContainer = styled.div`
  > .searchBar {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
    position: relative;

    > input {
      border: 1px solid ${colors.primary1};
      border-radius: 5px;
      outline: none;
      width: 300px;
      height: 30px;
      font-family: ${primaryFont};
      font-size: ${typeScale.bodyText};
      padding: 3px;
      transition: 1s all ease;
      background-color: #e0e0e0;

      &:focus {
        background-color: #fff;
      }
    }

    > .icon-container {
      display: flex;
      justify-content: center;
      width: 34px;
      height: 30px;
      background: ${colors.primary2};
      border-radius: 5px;
      border: 1px solid ${colors.primary1};
      text-align: center;
      padding: 3px;
      cursor: pointer;
      transition: 1s all ease;
      z-index: 1;

      &:hover {
        background: ${colors.tertiary1};
      }
    }
  }

  > .drop-down-searchMenu {
    margin-top: 5px;
    width: 353px;
    height: auto;
    border: 1px solid ${colors.primary1};
    border-radius: 5px;
    position: absolute;
    z-index: 1;
    background: #fff;

    > .drop-down-list {
      display: flex;
      flex-direction: column;

      > span {
        padding: 8px;
        transition: 0.5s all ease;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
          background: ${colors.secondary3};
        }
      }
    }
  }
`;

const OverLay = styled.div`
  box-sizing: border-box;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: ${(props: OverlayProps) => (props.active ? 'auto' : 'none')};
`;

const Navbar: React.FC<Props> = ({
  setGifData,
  setSearchItem,
  fetchTrendingGifData,
}) => {
  const [searching, setSearching] = useState(false);
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const [searchData, setSearchData] = useState<GifDataEntry[]>([]);

  const fetchSearchGifData = async (string: string, iconClicked: boolean) => {
    const endpoint: string = 'https://api.giphy.com/v1/gifs/search';
    const results = await axios(endpoint, {
      params: {
        api_key: API_KEY,
        q: string,
        limit: 100,
        rating: 'g',
      },
    });
    setSearchData(results.data.data);
    if (iconClicked) {
      setGifData(results.data.data);
      setSearchItem(searchKeyWord);
      setSearching(false);
    }
  };

  const searchDropDown = () => {
    if (searching) {
      return (
        <div className='drop-down-searchMenu'>
          <div className='drop-down-list'>
            {searchData.slice(0, 5).map((searchedGif: GifDataEntry) => {
              return <span key={searchedGif.id}>{searchedGif.title}</span>;
            })}
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <MainNavbarContainer>
      <MainContentContainer>
        <img
          src={Giffy_IMG}
          onClick={() => {
            fetchTrendingGifData();
            setSearchItem('');
          }}></img>
        <div className='menu-list'>
          <span
            onClick={() => {
              fetchTrendingGifData();
              setSearchItem('');
            }}>
            Home
          </span>
          <span>Log In</span>
          <span>Upload</span>
          <span>Create</span>
        </div>

        <SearchBarContainer>
          <div className='searchBar'>
            <input
              id='test'
              placeholder='Search for gifs here'
              onClick={() => setSearching(true)}
              onChange={(e) => {
                fetchSearchGifData(e.target.value, false);
                setSearchKeyWord(e.target.value);
              }}
              onKeyPress={(e) =>
                e.key === 'Enter' && fetchSearchGifData(searchKeyWord, true)
              }></input>
            <div
              className='icon-container'
              onClick={() => {
                fetchSearchGifData(searchKeyWord, true);
              }}>
              <img src={searchIcon}></img>
            </div>
          </div>

          {searchDropDown()}
        </SearchBarContainer>
      </MainContentContainer>
      <OverLay active={searching} onClick={() => setSearching(false)}></OverLay>
    </MainNavbarContainer>
  );
};

export default Navbar;
