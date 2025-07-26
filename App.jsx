import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import AppNavbar from './components/Navbar'; 

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <AppNavbar onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<MovieList searchQuery={searchQuery} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
