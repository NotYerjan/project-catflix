import React, { useState } from "react";
import FavoritsPageControl from "../components/FavoritsPageControl";
import useMovieStore from "../store/storeMovies";
import { Button } from "@mui/material";

export default function FavoritsPage() {
  const [showC, setShowC] = useState(" Favorits Movies");
  const [mId, setMId] = useState(1);
  const movies = useMovieStore((state) => state.movies);
  
  const showChange = (e) => {
    const typs = e.target.name;
  
    if (typs == "favorits") setShowC("My Favorite Movies"), setMId(1);
    if (typs == "watching") setShowC("My Watching Movie List"), setMId(2);
    if (typs == "watched") setShowC("My Watched Movies"), setMId(3);
    if (typs == "goingToWatch") setShowC("I'm going to watch this movies"), setMId(4);
  };

  return (
    <div>
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
      <br />
      <h1>{showC}</h1>
      <br />
      <FavoritsPageControl movies={movies}  mId={mId} />
    </div>
  );
}
