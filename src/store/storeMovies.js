import create from "zustand";
// import initMovies from "./initMovies";
import { INIT_MOVIES } from "./initMovies";
const useMovieStore = create((set) => ({
  movies: INIT_MOVIES,
  addReviewToMovie: (movieId, reviewId) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.id === movieId
          ? { ...movie, reviewIds: [...movie.reviewIds, reviewId] }
          : movie
      ),
    })),
  removeReviewFromMovie: (movieId, reviewId) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.id === movieId
          ? {
              ...movie,
              reviewIds: movie.reviewIds.filter(
                (review) => review !== reviewId
              ),
            }
          : movie
      ),
    })),
  //  filterMovies = (key, v) => movies.filter(m => m[key] === v)
}));

export default useMovieStore;
