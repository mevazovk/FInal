import React, { useState, useEffect } from 'react';
import CryptoList from '../components/CryptoList';
import '../styles/Main.css';

function Main() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCryptoData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.coinlore.net/api/tickers/');
      const data = await response.json();
      setCryptoData(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  return (
    <div className="main">
      <button onClick={fetchCryptoData} className="update-button">Update</button>
      {loading ? <p>Loading...</p> : <CryptoList cryptoData={cryptoData} />}
    </div>
  );
}

export default Main;