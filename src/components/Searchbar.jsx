import { styled, alpha } from "@mui/material/styles";
import { FiSearch } from "react-icons/fi";
import { InputBase, ListItemButton, ListItemText } from "@mui/material";
import useMovieStore from "../store/storeMovies";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
}));

export default function Searchbar() {
  const _close = useRef(null);
  const windowSize = useRef([window.innerWidth]);
  const navigate = useNavigate();
  const movies = useMovieStore((state) => state.movies);
  const [searchMovies, setSearchMovies] = useState("");
  const [putSearchs, setPutSearchs] = useState([]);
  useEffect(() => {
    document.addEventListener("click", closeSearch, true);
  });

  useEffect(() => {
    let searchedMovies;

    if (String(searchMovies).trim() !== "") {
      searchedMovies = movies.filter((movie) => {
        return movie.title
          .toLowerCase()
          .includes(searchMovies.toLowerCase().trim());
      });
      setPutSearchs(
        searchedMovies.map((movie) => (
          <ListItemButton
            component="a"
            key={movie.title}
            onClick={() => navigate(`/movies/${movie.id}`)}
          >
            <ListItemText primary={movie.title} />
          </ListItemButton>
        ))
      );
    } else {
      setPutSearchs([]);
    }
  }, [searchMovies]);

  const closeSearch = (e) => {
    if (!_close.current.contains(e.target)) {
      setPutSearchs([]);
    }
  };

  const showSeachStyle = {
    position: "absolute",
    backgroundColor: "#2e2a2d",
    bottom: windowSize.current[0] < 900 ? "120px" : "",
  };

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <FiSearch />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSearchMovies(e.target.value)}
          value={searchMovies}
        />
      </Search>
      <div ref={_close} style={showSeachStyle}>
        {putSearchs}
      </div>
    </>
  );
}
