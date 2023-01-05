import { styled, alpha } from "@mui/material/styles";
import { FiSearch } from "react-icons/fi";
import { InputBase, ListItemButton, ListItemText, Box } from "@mui/material";
import useMovieStore from "../store/storeMovies";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
  const movies = useMovieStore((state) => state.movies);
  const [mov, setMov] = useState([]);
  const [sear, setSear] = useState("");
  // const [withs, setWiths ]= useState( document.body.offsetWidt);
  let searchedMovies, searchWord;

  // const ImSearching = (e) => {
  //   searchWord = e.target.value;
  //   setSear(searchWord);
  //   // console.log(searchWord)
  //   if (sear.trim()) {
  //     searchedMovies = movies.filter((movie) => {
  //       return movie.title
  //         .toLowerCase()
  //         .includes(sear.toLowerCase().trim());
  //     });
  //     setMov(
  //       searchedMovies.map((movq) => (
  //         <Link to={`/movies/${movq.id}`}>
  //             <ListItemButton component="a" key={movq.title}>
  //             <ListItemText primary={movq.title} />
  //         </ListItemButton>
  //           </Link>
  //       ))
  //     );
  //   }

  // };

  return (
    <>
      {/* {sul && <div style={styling}>{mov}</div>} */}
      {/* {mov} */}
      <Search>
        <SearchIconWrapper>
          <FiSearch />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSear(e.target.value)}
          value={sear}
        />
      </Search>
    </>
  );
}

