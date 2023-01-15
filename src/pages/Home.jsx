import React, { useState } from "react";
// import { FiBell, FiChevronDown } from "react-icons/fi";
import useMovieStore from "../store/storeMovies";
import MovieList from "../components/MovieList";
import Logo from "../components/Logo";
import HomeFilter from "../components/HomeFilter";
import { Button } from "@mui/material";
import { useEffect } from "react";
// import "./home.css";

export default function Home() {
  const movies = useMovieStore((state) => state.movies);
  const [names, setName] = useState({
    all: true,
    action: true,
    adventure: true,
    fantasy: true,
    comedy: true,
    drama: true,
    movie: true,
    mystery: true,
    thriller: true,
  });

  const handleChangeAll = () => {
    if (!names.all) {
      setName({
        all: true,
        action: true,
        adventure: true,
        fantasy: true,
        comedy: true,
        drama: true,
        movie: true,
        mystery: true,
        thriller: true,
      });
    } else {
      setName({
        all: false,
        action: false,
        adventure: false,
        fantasy: false,
        comedy: false,
        drama: false,
        movie: false,
        mystery: false,
        thriller: false,
      });
    }
  };
  const handleChange = (e) => {
    const temp = e.target.name;

    if (temp === "action") {
      setName({
        ...names,
        action: !names.action,
      });
    }
    if (temp === "adventure") {
      setName({
        ...names,
        adventure: !names.adventure,
      });
    }
    if (temp === "fantasy") {
      setName({
        ...names,
        fantasy: !names.fantasy,
      });
    }
    if (temp === "comedy") {
      setName({
        ...names,
        comedy: !names.comedy,
      });
    }
    if (temp === "drama") {
      setName({
        ...names,
        drama: !names.drama,
      });
    }
    if (temp === "movie") {
      setName({
        ...names,
        movie: !names.movie,
      });
    }
    if (temp === "mystery") {
      setName({
        ...names,
        mystery: !names.mystery,
      });
    }
    if (temp === "thriller") {
      setName({
        ...names,
        thriller: !names.thriller,
      });
    }
  };
  useEffect(() => {
    if (
      names.action &&
      names.adventure &&
      names.fantasy &&
      names.comedy &&
      names.drama &&
      names.movie &&
      names.mystery &&
      names.thriller
    ) {
      setName({
        ...names,
        all: true,
      });
    } else {
      setName({
        ...names,
        all: false,
      });
    }
  }, [names.action, names.adventure, names.fantasy]);

  useEffect(() => {
    if (
      names.action &&
      names.adventure &&
      names.fantasy &&
      names.comedy &&
      names.drama &&
      names.movie &&
      names.mystery &&
      names.thriller
    ) {
      setName({
        ...names,
        all: true,
      });
    } else {
      setName({
        ...names,
        all: false,
      });
    }
  }, [names.comedy, names.drama, names.movie]);

  useEffect(() => {
    if (
      names.action &&
      names.adventure &&
      names.fantasy &&
      names.comedy &&
      names.drama &&
      names.movie &&
      names.mystery &&
      names.thriller
    ) {
      setName({
        ...names,
        all: true,
      });
    } else {
      setName({
        ...names,
        all: false,
      });
    }
  }, [names.mystery, names.thriller]);

  const onStyle = {
    background: "blue",
    color: "white",
  };
  const offStyle = {
    background: "",
    color: "",
  };

  const buttons = {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  };

  return (
    <div>
      <div style={buttons}>
        <Button
          name="all"
          style={names.all ? onStyle : offStyle}
          onClick={() => handleChangeAll()}
        >
          ALL
        </Button>
        <Button
          name="action"
          style={names.action ? onStyle : offStyle}
          onClick={(e) => handleChange(e)}
        >
          Action
        </Button>
        <Button
          name="adventure"
          style={names.adventure ? onStyle : offStyle}
          onClick={(e) => handleChange(e)}
        >
          Adventure
        </Button>
        <Button
          name="fantasy"
          style={names.fantasy ? onStyle : offStyle}
          onClick={(e) => handleChange(e)}
        >
          Fantasy
        </Button>
        <Button
          name="comedy"
          style={names.comedy ? onStyle : offStyle}
          onClick={(e) => handleChange(e)}
        >
          Comedy
        </Button>
        <Button
          name="drama"
          style={names.drama ? onStyle : offStyle}
          onClick={(e) => handleChange(e)}
        >
          Drama
        </Button>
        <Button
          name="movie"
          style={names.movie ? onStyle : offStyle}
          onClick={(e) => handleChange(e)}
        >
          Movie
        </Button>
        <Button
          name="mystery"
          style={names.mystery ? onStyle : offStyle}
          onClick={(e) => handleChange(e)}
        >
          Mystery
        </Button>
        <Button
          name="thriller"
          style={names.thriller ? onStyle : offStyle}
          onClick={(e) => handleChange(e)}
        >
          Thriller
        </Button>
      </div>
      {names.all}
      <HomeFilter movies={movies} names={names} />
    </div>
  );
}
