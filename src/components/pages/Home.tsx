import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { API_KEY, GifDataEntry } from '../../API';
import '../../App.css';
import Navbar from '../Navbar';
import MainContent from '../MainContent';
import Footer from '../Footer';

const Home: React.FC = () => {
  const [gifData, setGifData] = useState<GifDataEntry[]>([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    fetchTrendingGifData();
  }, []);

  const fetchTrendingGifData = async () => {
    const endpoint: string = 'https://api.giphy.com/v1/gifs/trending';
    const results = await axios(endpoint, {
      params: {
        api_key: API_KEY,
        limit: 100,
        rating: 'g',
      },
    });
    setGifData(results.data.data);
  };

  return (
    <div>
      <Navbar
        setGifData={setGifData}
        setSearchItem={setSearchItem}
        fetchTrendingGifData={fetchTrendingGifData}
      />
      <MainContent data={gifData} searchItem={searchItem} />
      <Footer />
    </div>
  );
};

export default Home;
