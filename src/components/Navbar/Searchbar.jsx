import { FiSearch } from "react-icons/fi";
import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import useMovieStore from "../../store/storeMovies";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const navigate = useNavigate();
  const movies = useMovieStore((state) => state.movies);

  const moviesList = movies.map((movie) => ({
    label: movie.title,
    id: movie.id,
  }));

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={moviesList}
        sx={{ width: "100%", minWidth: 250 }}
        size="small"
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start" sx={{ pl: 1 }}>
                  <FiSearch />
                </InputAdornment>
              ),
            }}
          />
        )}
        renderOption={(props, option) => (
          <Box {...props} onClick={() => navigate(`/movies/${option.id}`)}>
            {option.label}
          </Box>
        )}
      />
    </>
  );
}
