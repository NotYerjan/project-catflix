import React from "react";
import { FiBell, FiChevronDown } from "react-icons/fi";
import useMovieStore from "../store/storeMovies";
import MovieList from "../components/MovieList";
import Logo from "../components/Logo";
// import "./home.css";
export default function Home() {
  const movies = useMovieStore((state) => state.movies);

  return (
    <div>
      <div>
        <div className="logo" style={{}}>
          <Logo />
          <FiBell className="background-icon" />
        </div>
      </div>
      <div className="flex-poligon">
        <p className="all">All</p>
        <FiChevronDown className="poligon" />
      </div>

      <MovieList movies={movies} />
    </div>
  );
}
