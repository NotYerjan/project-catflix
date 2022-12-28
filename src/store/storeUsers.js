import create from "zustand";
import { INIT_USERS } from "./initUsers";

const useUserStore = create((set) => ({
  users: INIT_USERS,
  currentUser: INIT_USERS[0],
  isLoggedIn: false,

  createAndLoginUser: (newUser) =>
    set((state) => ({
      users: [...state.users, newUser],
      currentUser: newUser,
      isLoggedIn: true,
    })),

  updateUserInGlobalStore: () =>
    set((state) => ({
      users: state.users.map((user) =>
        state.currentUser.id === user.id ? state.currentUser : user
      ),
    })),

  deleteAndLogoutUser: (userId) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== userId),
      currentUser: null,
      isLoggedIn: false,
    })),

  loginUser: (userId) =>
    set((state) => ({
      currentUser: state.users.find(({ id }) => id === userId),
      isLoggedIn: true,
    })),

  updateCurrentUserInfo: (userInfo) =>
    set((state) => ({
      currentUser: { ...state.currentUser, ...userInfo },
    })),

  logoutUser: () =>
    set((state) => ({
      currentUser: null,
      isLoggedIn: false,
    })),

  changeMovieStatusOfUser: (movieId, newStatus) =>
    set((state) => {
      const userMovie = state.currentUser.movies.find(
        ({ id }) => id === movieId
      );

      return userMovie
        ? updateExistingUserMovie(state, movieId, { status: newStatus })
        : addNewMovieToUserMovies(state, { id: movieId, status: newStatus });
    }),

  toggleFavoriteMovie: (movieId) =>
    set((state) => {
      const userMovie = state.currentUser.movies.find(
        ({ id }) => id === movieId
      );

      return userMovie
        ? updateExistingUserMovie(state, movieId, {
            isFavorite: !userMovie.isFavorite,
          })
        : addNewMovieToUserMovies(state, { id: movieId, isFavorite: true });
    }),
}));

const addNewMovieToUserMovies = (state, newMovie) => ({
  currentUser: {
    ...state.currentUser,
    movies: [...state.currentUser, newMovie],
  },
});

const updateExistingUserMovie = (state, movieId, updatedMovieData) => ({
  currentUser: {
    ...state.currentUser,
    movies: state.currentUser.movies.map((movie) =>
      movie.id === movieId ? { ...movie, ...updatedMovieData } : movie
    ),
  },
});

export default useUserStore;
