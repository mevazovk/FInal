import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import Search from './pages/Search';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav>
            <Link to="/">Main</Link>
            <Link to="/search">Search</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;