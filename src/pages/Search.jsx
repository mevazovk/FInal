import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CryptoList from '../components/CryptoList';
import '../styles/Search.css';

function Search() {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const fetchCryptoData = async () => {
    try {
      const response = await fetch('https://api.coinlore.net/api/tickers/');
      const data = await response.json();
      setCryptoData(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useState(() => {
    fetchCryptoData();
  }, []);

  const handleSearch = (query) => {
    const results = cryptoData.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(query.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="search">
      <SearchBar className="search_bar" onSearch={handleSearch} />
      <CryptoList cryptoData={searchResults} />
    </div>
  );
}

export default Search;