import React, { useState, useEffect } from "react";
import useMovieStore from "../store/storeMovies";
import MovieList from "../components/Movie/MovieList";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function Home() {
  const movies = useMovieStore((state) => state.movies);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [genreFilter, setGenreFilter] = useState("all");
  const [countryFilter, setCountryFilter] = useState("all");
  const [releaseYear, setReleaseYear] = useState(0);

  const genres = [
    "all",
    "action",
    "adventure",
    "fantasy",
    "comedy",
    "drama",
    "mystery",
    "thriller",
  ];
  const countries = ["all", "usa", "india", "china", "uk", "germany"];

  //---------------------- to take the reting for the movies ---------------------------
  // releaseDate
  useEffect(() => {
    setFilteredMovies(movies);

    if (genreFilter !== "all") {
      setFilteredMovies((movies) =>
        movies.filter(({ tags }) => tags.includes(genreFilter))
      );
    }

    if (countryFilter !== "all") {
      setFilteredMovies((movies) =>
        movies.filter(({ country }) => country === countryFilter)
      );
    }

    if (releaseYear > 1980 && releaseYear < 2030) {
      setFilteredMovies((movies) =>
        movies.filter(({ releaseDate }) => releaseDate.includes(releaseYear))
      );
    }
  }, [genreFilter, countryFilter, releaseYear]);

  const styles = {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  };

  return (
    <div>
      <div style={styles}>
        <TextField
          select
          label="Genre"
          onChange={(e) => setGenreFilter(e.target.value)}
          value={genreFilter}
          sx={{ width: 150 }}
          size="small"
        >
          {genres.map((g) => (
            <MenuItem value={g} key={g}>
              {g.toUpperCase()}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Release Year"
          type="number"
          onChange={(e) => setReleaseYear(e.target.value)}
          value={releaseYear}
          sx={{ width: 150 }}
          size="small"
        />

        <TextField
          select
          label="Country"
          onChange={(e) => setCountryFilter(e.target.value)}
          value={countryFilter}
          sx={{ width: 150 }}
          size="small"
        >
          {countries.map((c) => (
            <MenuItem value={c} key={c}>
              {c.toUpperCase()}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
}
