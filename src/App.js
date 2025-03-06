import React, { useState } from 'react';
import Display from './Display';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const handler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
      .then((response) => response.json())
      .then((res) => setMovies(res.Search || []));
  };

  return (
    <div className="app-container">
      <center>
        <h4 className="app-title">Movie Search</h4>
        <form onSubmit={submitHandler} className="search-form">
          <input type="text" value={search} onChange={handler} className="search-input" placeholder="Search for movies..." />
          <button type="submit" className="search-button">Search</button>
        </form>
        {movies.length > 0 ? <Display movies={movies} /> : null}
      </center>
    </div>
  );
};

export default App;