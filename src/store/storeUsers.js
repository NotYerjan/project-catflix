import create from "zustand";
import { INIT_USERS } from "./initUsers";

const useUserStore = create((set) => ({
  users: INIT_USERS,
  createUser: (newUser) =>
    set((state) => ({ users: [...state.users, newUser] })),
  updateUser: (userId, userInfo) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId ? { ...user, ...userInfo } : user
      ),
    })),
  deleteUser: (userId) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== userId),
    })),
  addMovieStatus: (userId, movieId, statusType) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId
          ? addMovieStatusToUser(user, movieId, statusType)
          : user
      ),
    })),
  toggleFavoriteMovie: (userId, movieId) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId ? toggleFavoriteMovieOfUser(user, movieId) : user
      ),
    })),
}));

const addMovieStatusToUser = (user, movieId, statusType) => {
  if (user.moviesStatus.finished.includes(movieId)) {
    deleteMovieStatusFromUser(user, movieId, "finished");
  } else if (user.moviesStatus.watching.includes(movieId)) {
    deleteMovieStatusFromUser(user, movieId, "watching");
  } else if (user.moviesStatus.willWatch.includes(movieId)) {
    deleteMovieStatusFromUser(user, movieId, "willWatch");
  }
  user.moviesStatus[statusType].push(movieId);
  return user;
};

const deleteMovieStatusFromUser = (user, movieId, statusType) => {
  user.moviesStatus[statusType] = user.moviesStatus[statusType].filter(
    (movie) => movie !== movieId
  );
  return user;
};

const toggleFavoriteMovieOfUser = (user, movieId) => {
  const newUser = user.favoriteMovies.includes(movieId)
    ? {
        ...user,
        favoriteMovies: user.favoriteMovies.filter(
          (movie) => movie !== movieId
        ),
      }
    : { ...user, favoriteMovies: [...user.favoriteMovies, movieId] };
  return newUser;
};

export default useUserStore;
