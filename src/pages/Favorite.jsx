import React, { useEffect, useState } from "react";
import useMovieStore from "../store/storeMovies";
import MovieList from "../components/MovieList";
import { Button } from "@mui/material";
import useUserStore from "../store/storeUsers";

export default function Favorite() {
  const user = useUserStore((state) => state.currentUser);
  const movies = useMovieStore((state) => state.movies);
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [type, setType] = useState("favorite");

  const userMovies = {
    favorite: user.movies
      .filter((movie) => movie.isFavorite)
      .map(({ id }) => id),
    watching: user.movies
      .filter((movie) => movie.status === "watching")
      .map(({ id }) => id),
    finished: user.movies
      .filter((movie) => movie.status === "finished")
      .map(({ id }) => id),
    willWatch: user.movies
      .filter((movie) => movie.status === "willWatch")
      .map(({ id }) => id),
  };

  useEffect(() => {
    setFilteredMovies(movies.filter(({ id }) => userMovies[type].includes(id)));
  }, [type]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="text" onClick={() => setType("favorite")}>
          Favorites
        </Button>
        <Button variant="text" onClick={() => setType("watching")}>
          Watching
        </Button>
        <Button variant="text" onClick={() => setType("finished")}>
          Watched
        </Button>
        <Button variant="text" onClick={() => setType("willWatch")}>
          Going to watch
        </Button>
      </div>
      {filteredMovies && <MovieList movies={filteredMovies} />}
    </div>
  );
}
