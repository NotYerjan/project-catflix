import create from "zustand";
import { persist } from "zustand/middleware";
import { INIT_MOVIES } from "./initMovies";

const useMovieStore = create(
  persist(
    (set, get) => ({
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
    }),
    { name: "storage" }
  )
);

export default useMovieStore;
