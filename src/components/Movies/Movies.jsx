import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearch} from "api/api";
import MoviesList from "components/MoviesList/MoviesList";

const Movies = () => {
    const [search, setSearch] = useState('');
    // const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const [searchParams, setSearchParams] = useSearchParams();
    const searchMovies = searchParams.get("query");
    

    useEffect(() => {
  
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const { results } = await getSearch(searchMovies);
                setItems(results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        if (searchMovies) {
            fetchMovies();
        }
    }, [searchMovies])
    
    const handleChange = (e) => {
        const {  value } = e.target;
        setSearch(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams( {query: search} );
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