import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardMedia } from "@mui/material";

export default function HomeFilter({ movies, names }) {
  const {
    all,
    action,
    adventure,
    fantasy,
    comedy,
    drama,
    movie,
    mystery,
    thriller,
  } = names;
  let temp,
    movieId,
    actionShow,
    adventureShow,
    fantasyShow,
    comedyShow,
    dramaShow,
    movieShow,
    mysteryShow,
    thrillerShow;

  if (all) {
    movieId = movies.map((movie) => movie.id);
  } else {
    if (action) {
      temp = movies.map(
        (movie) => movie.tags.find((tag) => tag === "action") && movie.id
      );
      actionShow = temp.filter((t) => t);
    }
    if (adventure) {
      temp = movies.map(
        (movie) => movie.tags.find((tag) => tag === "adventure") && movie.id
      );
      adventureShow = temp.filter((t) => t);
    }
    if (fantasy) {
      temp = movies.map(
        (movie) => movie.tags.find((tag) => tag === "fantasy") && movie.id
      );
      fantasyShow = temp.filter((t) => t);
    }
    if (comedy) {
      temp = movies.map(
        (movie) => movie.tags.find((tag) => tag === "comedy") && movie.id
      );
      comedyShow = temp.filter((t) => t);
    }
    if (drama) {
      temp = movies.map(
        (movie) => movie.tags.find((tag) => tag === "drama") && movie.id
      );
      dramaShow = temp.filter((t) => t);
    }
    if (movie) {
      temp = movies.map(
        (movie) => movie.tags.find((tag) => tag === "movie") && movie.id
      );
      movieShow = temp.filter((t) => t);
    }
    if (mystery) {
      temp = movies.map(
        (movie) => movie.tags.find((tag) => tag === "mystery") && movie.id
      );
      mysteryShow = temp.filter((t) => t);
    }
    if (thriller) {
      temp = movies.map(
        (movie) => movie.tags.find((tag) => tag === "thriller") && movie.id
      );
      thrillerShow = temp.filter((t) => t);
    }
  }

  return (
    <Grid container spacing={2}>
      {movies.map((movie, index) => {
        if (movieId) {
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
        }
        if (actionShow) {
          for (let tm of actionShow) {
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
        }
        if (adventureShow) {
          for (let tm of adventureShow) {
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
        }
        if (fantasyShow) {
          for (let tm of fantasyShow) {
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
        }
        if (comedyShow) {
          for (let tm of comedyShow) {
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
        }

        if (dramaShow) {
          for (let tm of dramaShow) {
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
        }

        if (movieShow) {
          for (let tm of movieShow) {
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
        }

        if (mysteryShow) {
          for (let tm of mysteryShow) {
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
        }

        if (thrillerShow) {
          for (let tm of thrillerShow) {
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
        }
      })}
    </Grid>
  );
}
