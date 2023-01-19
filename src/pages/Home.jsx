import React, { useState, useEffect } from "react";
import useMovieStore from "../store/storeMovies";
import MovieList from "../components/MovieList";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export default function Home() {
  const movies = useMovieStore((state) => state.movies);
  const [tags, setTags] = useState("all");
  const [durations, setDuration] = useState("all");
  const [movielist, setMovielist] = useState([]);
  const [contrylist, setContrylist] = useState("all");
  const [releaseDates, setReleaseDate] = useState("all");
  const [controluseEffect, setControlEffect] = useState(false);

  useEffect(() => {
    if ((tags === "all") && (durations === "all") && (releaseDates === "all") && (contrylist === "all")) {
      //0-0-0-0
      setMovielist(movies);
    } else if ((tags === "all") && (durations === "all") && (releaseDates === "all") && (contrylist !== "all")) { 
      //0-0-0-1
       setMovielist(
         movies.filter((movie) => movie.country.includes(contrylist))
       );
    } else if ((tags === "all") && (durations === "all") && (releaseDates !== "all") && (contrylist === "all")) { 
      //0-0-1-0
       setMovielist(
         movies.filter((movie) => movie.releaseDate.includes(releaseDates))
       );
    } else if ((tags === "all") && (durations === "all") && (releaseDates !== "all") && (contrylist !== "all")) { 
      //0-0-1-1
       setMovielist(
         movies
           .filter((movie) => movie.releaseDate.includes(releaseDates))
           .filter((movie) => movie.country.includes(contrylist))
       );
    } else if ((tags === "all") && (durations !== "all") && (releaseDates === "all") && (contrylist === "all")) { 
      //0-1-0-0
      setMovielist(
        movies.filter((movie) => movie.duration >= Number(durations)*30-30 && movie.duration <= Number(durations)*30)
      );
    } else if ((tags === "all") && (durations !== "all") && (releaseDates === "all") && (contrylist !== "all")) { 
      //0-1-0-1
       setMovielist(
         movies
            .filter((movie) => movie.duration >= Number(durations) * 30 - 30 && movie.duration <= Number(durations) * 30)
            .filter((movie) => movie.country.includes(contrylist))
       );
    } else if ((tags === "all") && (durations !== "all") && (releaseDates !== "all") && (contrylist === "all")) { 
      //0-1-1-0
       setMovielist(
         movies
            .filter((movie) => movie.duration >= Number(durations) * 30 - 30 && movie.duration <= Number(durations) * 30)
            .filter((movie) => movie.releaseDate.includes(releaseDates))
           );
          } else if ((tags === "all") && (durations !== "all") && (releaseDates !== "all") && (contrylist !== "all")) { 
            //0-1-1-1
            setMovielist(
              movies
                .filter((movie) => movie.duration >= Number(durations) * 30 - 30 && movie.duration <= Number(durations) * 30)
                .filter((movie) => movie.releaseDate.includes(releaseDates))
                .filter((movie) => movie.country.includes(contrylist))
       );
    } else if ((tags !== "all") && (durations === "all") && (releaseDates === "all") && (contrylist === "all")) { 
      //1-0-0-0
       setMovielist(movies.filter((movie) => movie.tags.includes(tags)))
    } else if ((tags !== "all") && (durations === "all") && (releaseDates === "all") && (contrylist !== "all")) { 
      //1-0-0-1
      setMovielist(movies.filter((movie) => movie.tags.includes(tags))
        .filter((movie) => movie.country.includes(contrylist))
      )
    } else if ((tags !== "all") && (durations === "all") && (releaseDates !== "all") && (contrylist === "all")) { 
      //1-0-1-0
       setMovielist(
         movies
           .filter((movie) => movie.tags.includes(tags))
           .filter((movie) => movie.releaseDate.includes(releaseDates))
       );
    } else if ((tags !== "all") && (durations === "all") && (releaseDates !== "all") && (contrylist !== "all")) { 
      //1-0-1-1
       setMovielist(
         movies
           .filter((movie) => movie.tags.includes(tags))
           .filter((movie) => movie.releaseDate.includes(releaseDates))
           .filter((movie) => movie.country.includes(contrylist))
       );
    } else if ((tags !== "all") && (durations !== "all") && (releaseDates === "all") && (contrylist === "all")) { 
      //1-1-0-0
       setMovielist(
         movies
           .filter((movie) => movie.tags.includes(tags))
           .filter((movie) => movie.duration >= Number(durations) * 30 - 30 && movie.duration <= Number(durations) * 30)
       );
    } else if ((tags !== "all") && (durations !== "all") && (releaseDates === "all") && (contrylist !== "all")) { 
      //1-1-0-1
       setMovielist(
         movies
           .filter((movie) => movie.tags.includes(tags))
           .filter((movie) => movie.duration >= Number(durations) * 30 - 30 && movie.duration <= Number(durations) * 30)
           .filter((movie) => movie.country.includes(contrylist))
       );
    } else if ((tags !== "all") && (durations !== "all") && (releaseDates !== "all") && (contrylist === "all")) { 
      //1-1-1-0
       setMovielist(
         movies
           .filter((movie) => movie.tags.includes(tags))
           .filter((movie) => movie.duration >= Number(durations) * 30 - 30 && movie.duration <= Number(durations) * 30)
           .filter((movie) => movie.releaseDate.includes(releaseDates))
       );
    } else if ((tags !== "all") && (durations !== "all") && (releaseDates !== "all") && (contrylist !== "all")) { 
      //1-1-1-1
       setMovielist(
         movies
           .filter((movie) => movie.tags.includes(tags))
           .filter((movie) => movie.duration >= Number(durations) * 30 - 30 && movie.duration <= Number(durations) * 30)
           .filter((movie) => movie.releaseDate.includes(releaseDates))
           .filter((movie) => movie.country.includes(contrylist))
       );
    }
  }, [controluseEffect]);
  const handleChange = (e) => {
    setControlEffect(!controluseEffect);
    if (e.target.name === "tags") setTags(e.target.value);
    if (e.target.name === "duration") setDuration(e.target.value);
    if (e.target.name === "contry") setContrylist(e.target.value);
    if (e.target.name === "relasi") setReleaseDate(e.target.value);
  };
  const styles = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginBottom:"20px"
  };
  return (
    <div>
      <div style={styles}>
        <FormControl width="200px">
          <InputLabel id="demo-simple-select-label">ALL</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="ALL"
            onChange={handleChange}
            value={tags}
            name="tags"
          >
            <MenuItem value="all">ALL</MenuItem>
            <MenuItem value="action">Action</MenuItem>
            <MenuItem value="adventure">Adventure</MenuItem>
            <MenuItem value="fantasy">Fantasy</MenuItem>
            <MenuItem value="comedy">Comedy</MenuItem>
            <MenuItem value="drama">Drama</MenuItem>
            <MenuItem value="movie">Movie</MenuItem>
            <MenuItem value="mystery">Mystery</MenuItem>
            <MenuItem value="thriller">Thriller</MenuItem>
          </Select>
        </FormControl>
        <FormControl width="200px">
          <InputLabel id="demo-simple-select-label">Duration</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Duration"
            onChange={handleChange}
            value={durations}
            name="duration"
          >
            <MenuItem value='all'>ALL</MenuItem>
            <MenuItem value={1}>0 - 30.min</MenuItem>
            <MenuItem value={2}>30.min - 1.h</MenuItem>
            <MenuItem value={3}>1.h - 1,3.h</MenuItem>
            <MenuItem value={4}>1,3.h - 2.h</MenuItem>
            <MenuItem value={5}>2.h - 2,3.h</MenuItem>
            <MenuItem value={6}>2,3.h - 3.h</MenuItem>
            <MenuItem value={7}>3.h - 3,3.h</MenuItem>
            <MenuItem value={8}>3,3.h - 4.h</MenuItem>
          </Select>
        </FormControl>
        <FormControl width="200px">
          <InputLabel id="demo-simple-select-label">Release Date</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Release Date"
            onChange={handleChange}
            value={releaseDates}
            name="relasi"
          >
            <MenuItem value="all">ALL</MenuItem>
            <MenuItem value="2000">2000</MenuItem>
            <MenuItem value="2001">2001</MenuItem>
            <MenuItem value="2002">2002</MenuItem>
            <MenuItem value="2003">2003</MenuItem>
            <MenuItem value="2004">2004</MenuItem>
            <MenuItem value="2005">2005</MenuItem>
            <MenuItem value="2006">2006</MenuItem>
            <MenuItem value="2007">2007</MenuItem>
            <MenuItem value="2008">2008</MenuItem>
            <MenuItem value="2009">2009</MenuItem>
            <MenuItem value="2010">2010</MenuItem>
            <MenuItem value="2011">2011</MenuItem>
            <MenuItem value="2012">2012</MenuItem>
            <MenuItem value="2013">2013</MenuItem>
            <MenuItem value="2014">2014</MenuItem>
            <MenuItem value="2015">2015</MenuItem>
            <MenuItem value="2016">2016</MenuItem>
            <MenuItem value="2017">2017</MenuItem>
            <MenuItem value="2018">2018</MenuItem>
            <MenuItem value="2019">2019</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
          </Select>
        </FormControl>
        <FormControl width="200px">
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Country"
            onChange={handleChange}
            value={contrylist}
            name="contry"
          >
            <MenuItem value="all">ALL</MenuItem>
            <MenuItem value="United States of America">U.S.A</MenuItem>
            <MenuItem value="india">India</MenuItem>
            <MenuItem value="china">China</MenuItem>
            <MenuItem value="germany">Germany</MenuItem>
            <MenuItem value="united kingdom">United Kingdom</MenuItem>
          </Select>
        </FormControl>
      </div>
      <MovieList movies={movielist} />
    </div>
  );
}
