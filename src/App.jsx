import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Loader from './components/Loader';
// import ErrorMessage from './components/ErrorMessage';
import StarryBackground from './components/StarryBackGround';
import { dummyMovies } from './data/dummyData';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://api.jsonbin.io/v3/b/685b0d1e8960c979a5b0c31f/latest';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(API_URL);
        const movieList = response.data.record.dummyMovies;
        const sortedMovies = movieList.sort((a, b) => b.rating - a.rating);
        setMovies(sortedMovies);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
        setError('Could not fetch movies from the cosmos. Displaying backup data.');
        setMovies(dummyMovies.sort((a, b) => b.rating - a.rating));
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <StarryBackground />
      <Header />
      <main className="container">
        {loading && <Loader />}
        {/* {error && <ErrorMessage message={error} />} */}
        {!loading && <MovieList movies={movies} />}
      </main>
    </>
  );
}

export default App;