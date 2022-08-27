// import Movies from "components/Movies/Movies";
import { useState, useEffect } from "react";
import { getMovies } from "api/api";
import { Link } from "react-router-dom";


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

    // if (itemsMovies.length === 0) {
      fetchMovies();
        // }
        
      
    
        
    }, [])

    const elements = items.map(({ id, title }) =>
        <li key={id}>
        <Link to={`/movies/${id}`}>{title}</Link>
    </li>)
    

    return (
        <div>
            <h2>Trending today</h2>
            <ul>{elements}</ul>
            {loading && <p>...loading</p>}
            {error && <p>...load failed</p>}
        </div>
    )
}
export default HomePage;