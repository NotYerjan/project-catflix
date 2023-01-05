import React, { useState } from "react";
import { FiBell, FiChevronDown } from "react-icons/fi";
import useMovieStore from "../store/storeMovies";
// import MovieList from "../components/MovieList";
import Logo from "../components/Logo";
import HomeFilter from "../components/HomeFilter";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import "./home.css";


export default function Home() {
  const movies = useMovieStore((state) => state.movies);
  const [homeFilter, setHomeFilter] = useState("all");
  
  const handleChange = (e) => {
    setHomeFilter( e.target.value )
  }

  return (
    <div>
      <FormControl width="200px">
        <InputLabel id="demo-simple-select-label">ALL</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="ALL"
          onChange={handleChange}
          value={homeFilter}
        >
          <MenuItem value='all'>ALL</MenuItem>
          <MenuItem value='action'>Action</MenuItem>
          <MenuItem value="adventure">Adventure</MenuItem>
          <MenuItem value="fantasy">Fantasy</MenuItem>
          <MenuItem value="comedy">Comedy</MenuItem>
          <MenuItem value="drama">Drama</MenuItem>
          <MenuItem value="movie">Movie</MenuItem>
          <MenuItem value="mystery">Mystery</MenuItem>
          <MenuItem value="thriller">Thriller</MenuItem>
        </Select>
      </FormControl>

      <HomeFilter movies={movies} selectMovies={homeFilter} />
    </div>
  );
}
