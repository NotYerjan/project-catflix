import { FiSearch } from "react-icons/fi";
import { ListItemButton, ListItemText } from "@mui/material";
import useMovieStore from "../../store/storeMovies";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useMuiTheme from "../../hooks/useMuiTheme";

export default function Searchbar() {
  const _close = useRef(null);
  const windowSize = useRef([window.innerWidth]);
  const navigate = useNavigate();
  const movies = useMovieStore((state) => state.movies);
  const [searchMovies, setSearchMovies] = useState("");
  const [putSearchs, setPutSearchs] = useState([]);
  const { Search, SearchIconWrapper, StyledInputBase } = useMuiTheme();

  useEffect(() => {
    document.addEventListener("click", closeSearch, true);
  }, []);

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
