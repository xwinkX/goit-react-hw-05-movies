import { useState, useEffect } from "react";
import { getMovies } from "api/api";
import MoviesList from "components/MoviesList/MoviesList";


const HomePage = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { results } = await getMovies();
        setItems(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (items.length === 0) {
      fetchMovies();
        }
       }, [items])

  return (
        <div>
            <h2>Trending today</h2>
            {items.length > 0 && <MoviesList items={items} />}
            {loading && <p>...loading</p>}
            {error && <p>...load failed</p>}
        </div>
    )
}
export default HomePage;