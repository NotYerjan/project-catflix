import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardMedia } from "@mui/material";
import useUserStore from "../store/storeUsers";

export default function FavoritesList({ movies }) {
  const user = useUserStore((state) => state.users);
  
  //Make this uncomment for the real using functions
  // const currentUser = useUserStore((state) => state.currentUser);

// this for just testing "need to remove when it comes real using"
  const currentUser = "akujsdrobin";

  const [chek] = user.filter((user) => user.id === currentUser);
  const mas = chek.movies.filter((ck) => ck.isFavorite);
  let temp = [];

  for (let m of mas) {
    temp.push(m.id);
  }

  return (
    <Grid container spacing={2}>
      {movies.map((movie, index) => {
        for (let tm of temp) {
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
