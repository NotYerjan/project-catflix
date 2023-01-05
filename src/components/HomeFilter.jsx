import React  from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardMedia } from "@mui/material";

export default function HomeFilter({ movies, selectMovies }) {

  let temp, movieId;
  if (selectMovies !== "all") {
    temp = movies.map(
      (movie) => movie.tags.find((tag) => tag === selectMovies) && movie.id
    );
    movieId = temp.filter((t) => t);
  } else {
    movieId = movies.map((movie) => movie.id);
  }

  return (
    <Grid container spacing={2}>
      {movies.map((movie, index) => {
        for (let tm of movieId) {
          if (movie.id === tm) {
            return (
              <Grid item key={movie.id} xs={6} sm={4} md={3}>
                <Card>
                  <Link to={`/movies/${movie.id}`}>
                    <CardMedia
                      component="img"
                      width="100%"
                      image={movie.imgSrc}
                      alt={movie.title}
                    />
                  </Link>
                </Card>
              </Grid>
            );
          }
        }
      })}
    </Grid>
  );
}
