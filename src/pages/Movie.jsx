import React from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/Movie/MovieInfo";
import ReviewsList from "../components/Reviews/ReviewsList";
import useMovieStore from "../store/storeMovies";
import useReviewStore from "../store/storeReview.js";
import useMuiTheme from "../hooks/useMuiTheme";

export default function Movie() {
  const { id } = useParams();
  const movies = useMovieStore((state) => state.movies);
  const movie = movies.find((m) => m.id === id);
  const reviews = useReviewStore((state) => state.reviews);
  const movieReviews = reviews.filter((review) =>
    movie.reviewIds.includes(review.id)
  );

  const { StyledBox } = useMuiTheme();

  return (
    <>
      {movie ? (
        <StyledBox>
          <MovieInfo movie={movie} movieReviews={movieReviews} />
          <ReviewsList movie={movie} movieReviews={movieReviews} />
        </StyledBox>
      ) : (
        <h3>There is no such kind of link</h3>
      )}
    </>
  );
}
