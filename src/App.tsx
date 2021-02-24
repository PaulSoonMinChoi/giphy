import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { API_KEY, GifDataEntry } from './API';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


const App: React.FC = () => {

  const [gifData, setGifData] = useState<GifDataEntry[]>([]);

  useEffect(() => {
    fetchTrendingGifData();
  }, [])

  const fetchTrendingGifData = async () => {
    const endpoint : string = "https://api.giphy.com/v1/gifs/trending";
    const results = await axios(endpoint, {
      params: {
        api_key: API_KEY,
        limit: 8,
        rating: 'g'
      }
    });
    setGifData(results.data.data)
  }

  return (
    <div className="App">
      <Navbar setGifData={setGifData}/>
      <MainContent data={gifData} />
      <Footer />
    </div>
  );
}

export default App;
