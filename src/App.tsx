import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { API_KEY } from './API';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App: React.FC = () => {

  const [gifData, setGifData] = useState<{}>({});

  useEffect(() => {
    fetchGifData();
  }, [])

  const fetchGifData = async () => {
    const results = await axios("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: API_KEY,
        limit: 20
      }
    });
    setGifData(results.data.data)
    console.log(results)
  }

  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
