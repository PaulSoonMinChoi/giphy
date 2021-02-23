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
    fetchGifData();
  }, [])

  const fetchGifData = async () => {
    const endpoint : string = "https://api.giphy.com/v1/gifs/trending";
    const results = await axios(endpoint, {
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
      <MainContent data={gifData}/>
      <Footer />
    </div>
  );
}

export default App;
