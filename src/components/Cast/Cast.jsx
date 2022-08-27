import { useState, useEffect } from "react";
import { getCast } from "api/api";
import { useParams } from "react-router-dom";
import css from "./Cast.module.css"


const Cast = () => {
    const { movieId } = useParams();
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  

    useEffect(() => {
  
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const {cast} = await getCast(movieId);
                setItem(cast);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, [movieId])
      
    const data = item.map(({ id, profile_path, character, name }) =>
            <li className={css.li} key={id}>
                <img className={css.img} src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
                {name}
                <p>Character: {character}</p>
            </li>)
  

    return (
        <div>
            {loading && <p>... Loading</p>}
            <ul>{data}</ul>
            {error && <p>...Movies load failed</p>}
            
        </div>
        
    )
}

export default Cast;