import React, { useEffect } from 'react';
import './App.css';
// 109898eb
const API_URL = 'http://www.omdbapi.com/?apikey=109898eb';
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };
  // useEffect(() => {
  //   searchMovies('Spiderman');
  // }, []);
  return <h1>app</h1>;
};
export default App;
