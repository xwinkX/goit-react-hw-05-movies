import { useState, useEffect } from "react";
import { getSearch} from "api/api";
import MoviesList from "components/MoviesList/MoviesList";

const Movies = () => {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  

    useEffect(() => {
  
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const { results } = await getSearch(query);
                setItems(results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        if (query) {
            fetchMovies();
        }
    }, [query])
    
    const handleChange = (e) => {
        const {  value } = e.target;
        setSearch(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery( search );
        setSearch("")
    };
    return (
        <div>
            {loading && <p>... Loading</p>}
            <form onSubmit={handleSubmit}>
            <input  value={search} onChange={handleChange} required/>
                <button>Search</button>
            {items.length > 0 && <MoviesList items={items} />}
            {error && <p>...Movies load failed</p>}
            </form>
        </div>
    )
}

export default Movies;