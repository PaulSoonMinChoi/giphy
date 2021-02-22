import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App: React.FC = () => {

  const [gifData, setGifData] = useState([]);

  useEffect(() => {
    fetchGifData();
  })

  const fetchGifData = async () => {
    const results = await axios("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: "9Kzu0W7BYMv9MwxbZS4ONvfeXT0Cw30O",
        limit: 20
      }
    });
    console.log(results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>hello world</div>
      </header>
    </div>
  );
}

export default App;
