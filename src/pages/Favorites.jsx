import React, { useEffect, useState } from "react";
import useMovieStore from "../store/storeMovies";
import MovieList from "../components/Movie/MovieList";
import { Button } from "@mui/material";
import useUserStore from "../store/storeUsers";
import { Navigate } from "react-router-dom";

export default function Favorites() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const user = useUserStore((state) => state.currentUser);
  const movies = useMovieStore((state) => state.movies);
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [type, setType] = useState("favorite");

  const userMovies = user?.movies
    ? {
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
      }
    : {};

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  useEffect(() => {
    setFilteredMovies(
      movies.filter(({ id }) => userMovies[type]?.includes(id))
    );
  }, [type]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex", gap: 20, marginBottom: 10 }}>
        <Button
          onClick={() => setType("favorite")}
          variant={type === "favorite" ? "contained" : "text"}
        >
          Favorites
        </Button>
        <Button
          onClick={() => setType("watching")}
          variant={type === "watching" ? "contained" : "text"}
        >
          Watching
        </Button>
        <Button
          onClick={() => setType("finished")}
          variant={type === "finished" ? "contained" : "text"}
        >
          Watched
        </Button>
        <Button
          onClick={() => setType("willWatch")}
          variant={type === "willWatch" ? "contained" : "text"}
        >
          Will watch
        </Button>
      </div>
      {filteredMovies && <MovieList movies={filteredMovies} />}
    </div>
  );
}
