import React  from 'react'
import { Link } from "react-router-dom";
import { Grid, Card, CardMedia } from "@mui/material";
import useUserStore from "../store/storeUsers";


export default function FavoritsPageControl({ movies, mId }) {

  const user = useUserStore((state) => state.currentUser);

  let mas;
  
  if (mId === 1) {
    mas = user.movies.filter((ck) => ck.isFavorite);
  } else if (mId === 2) {
    mas = user.movies.filter((ck) => ck.status === "watching");
  } else if (mId === 3) {
    mas = user.movies.filter((ck) => ck.status === "finished");
  } else if (mId === 4) {
    mas = user.movies.filter((ck) => ck.status === "willWatch");
  }

  const movieId = mas.map((m)=> m.id)

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
