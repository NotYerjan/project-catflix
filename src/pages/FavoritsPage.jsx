import React, { useState } from "react";
import FavoritsPageControl from "../components/FavoritsPageControl";
import useMovieStore from "../store/storeMovies";
import { Button } from "@mui/material";

export default function FavoritsPage() {
  const [mId, setMId] = useState(1);
  const movies = useMovieStore((state) => state.movies);

  const showChange = (e) => {
    const typs = e.target.name;

    if (typs == "favorits") setMId(1);
    if (typs == "watching") setMId(2);
    if (typs == "watched") setMId(3);
    if (typs == "goingToWatch") setMId(4);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="text" name="favorits" onClick={showChange}>
          Favorites
        </Button>
        <Button variant="text" name="watching" onClick={showChange}>
          Watching
        </Button>
        <Button variant="text" name="watched" onClick={showChange}>
          Watched
        </Button>
        <Button variant="text" name="goingToWatch" onClick={showChange}>
          Going to watch
        </Button>
      </div>
      <FavoritsPageControl movies={movies} mId={mId} />
    </div>
  );
}
