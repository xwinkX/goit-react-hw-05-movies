import Menu from "./Menu/Menu";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import Cast from "./Cast/Cast";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    > 
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<Cast/>} />
        <Route path="/movies/:movieId/reviews" element={<MovieDetailsPage/>} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
};
