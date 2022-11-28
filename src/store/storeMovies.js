import create from "zustand";
// import initMovies from "./initMovies";

const useMovieStore = create((set) => ({
  movies: [
    { id: 1, reviews: ["hello", "lkjleig"] },
    { id: 2, reviews: ["inoin"] },
  ],
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
