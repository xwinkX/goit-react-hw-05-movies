import { useState, useEffect } from "react";
import { getReviews} from "api/api";
import { useParams } from "react-router-dom";
import css from "./Reviews.module.css"


const Review = () => {
    const { movieId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  

    useEffect(() => {
  
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const {results} = await getReviews(movieId);
                setItems(results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, [movieId])
      
        const data = items.map(({ author, content, id }) =>
            <li className={css.li} key={id}>
               <p> {author}</p>
                <p> {content}</p>
            </li>)

      return (
        <div>
            {loading && <p>... Loading</p>}
              <ul>{data }</ul>
            {error && <p>...Movies load failed</p>}
            
        </div>
        
    )
}

export default Review;