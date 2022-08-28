import { useParams, Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, } from "react";
import { getSingleMovies } from "api/api";
import css from "./MovieDetails.module.css"

const MovieDetailsPage = () => {
  const {movieId} = useParams();
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 
  const location = useLocation();
  const from = location.state?.from || "/movies";

  const goBack = () => navigate(from);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const results = await getSingleMovies(movieId);
        setItems(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
       }, [movieId])

  const { poster_path, genres, title, overview, vote_average } = items;
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
            <Link state={{from}} to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link state={{from}} to={`reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet/>
      </>
  )
} 
export default MovieDetailsPage;