import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleMovies } from "api/api";
import css from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {
  const {movieId} = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const goBack = () => navigate(-1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const results = await getSingleMovies(movieId);
        setItem(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
       }, [movieId])

  const { poster_path, genres, title, overview, vote_average } = item;
  const genre = genres?.map(el => el.name).join(' ');
  return (
    <>
     <button onClick={goBack}>Go Back</button>
      <div className={css.div}>
      {loading && <p>...loading</p>}
      <img className={css.img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="www" />
      <div>
        <h2>{title}</h2>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        {overview}
        <h4>Genres</h4>
        {genre}
      </div>
      {error && <p>...load failed</p>}
    </div>
     <div className={css.div_add}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      </>
  )
} 
export default MovieDetailsPage;