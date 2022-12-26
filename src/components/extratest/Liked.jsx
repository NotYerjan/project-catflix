import React from "react";
import useMovieStore from "../../store/storeMovies";
import FavoritesList from "../FavoritesList";

function Liked() {
  const movies = useMovieStore((state) => state.movies);

  return (
    <div>
      <FavoritesList movies={movies} />
    </div>
  );
}

export default Liked