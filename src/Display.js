import React from 'react';
import './App.css';

const Display = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <div className="movie-card" key={index}>
          <img className="movie-poster" src={movie.Poster} alt="Card image cap"/>
          <div className="movie-info">
            <h5 className="movie-title">{movie.Title}</h5>
            <p className="movie-year">{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Display;