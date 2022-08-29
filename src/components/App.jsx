
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Menu from "./Menu/Menu";

// const Menu = lazy(() => import('./Menu/Menu'));
const Home = lazy(() => import('./Home/Home'));
const MovieDetails = lazy(() => import( './MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const Cast = lazy(() => import( './Cast/Cast'));
const Reviews = lazy(() => import( './Reviews/Reviews'));
const Movies = lazy(() => import('./Movies/Movies'));

export const App = () => {
  return (
    <div> 
      <Menu />
      <Suspense fallback={<p>...Load Page</p>}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast/>} />
              <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
        </Suspense>
    </div>
  );
};
