import create from "zustand";
// import initMovies from "./initMovies";
import { INIT_MOVIES } from "./initMovies";
const useMovieStore = create((set) => ({
  movies: INIT_MOVIES,
  addReviewToMovie: (movieId, reviewId) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.id === movieId
          ? { ...movie, reviews: [...movie.reviews, reviewId] }
          : movie
      ),
    })),
  removeReviewFromMovie: (movieId, reviewId) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.id === movieId
          ? {
              ...movie,
              reviews: movie.reviews.filter((review) => review !== reviewId),
            }
          : movie
      ),
    })),
}));

export default useMovieStore;
