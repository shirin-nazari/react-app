import React, { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './noun-search.svg';
import MovieCard from './MovieCard';
// 109898eb
const API_URL = 'http://www.omdbapi.com/?apikey=109898eb';
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  const movie1 = {
    Title: 'The Amazing Spiderman T4 Premiere Special',
    Year: '2012',
    imdbID: 'tt2233044',
    Type: 'movie',
    Poster: 'N/A',
  };
  useEffect(() => {
    searchMovies('Spiderman');
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movie"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
