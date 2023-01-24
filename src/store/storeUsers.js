import create from "zustand";
import { INIT_USERS } from "./initUsers";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set, get) => ({
      users: INIT_USERS,
      currentUser: null,
      isLoggedIn: false,
      isDarkMode: true,

      switchMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

      createAndLoginUser: (newUser) =>
        set((state) => ({
          users: [...state.users, newUser],
          currentUser: newUser,
          isLoggedIn: true,
        })),

      updateUserInGlobalStore: () => updateGlobalUser(set),

      deleteAndLogoutUser: () =>
        set((state) => ({
          users: state.users.filter((user) => user.id !== state.currentUser.id),
          currentUser: null,
          isLoggedIn: false,
        })),

      loginUser: (userId) =>
        set((state) => ({
          currentUser: state.users.find(({ id }) => id === userId),
          isLoggedIn: true,
        })),

      updateCurrentUserInfo: (userInfo) => {
        set((state) => ({
          currentUser: { ...state.currentUser, ...userInfo },
        }));
        updateGlobalUser(set);
      },

      logoutUser: () =>
        set((state) => ({
          currentUser: null,
          isLoggedIn: false,
        })),

      changeMovieStatusOfUser: (movieId, newStatus) => {
        set((state) => {
          const userMovie = state.currentUser.movies?.find(
            ({ id }) => id === movieId
          );

          return userMovie
            ? updateExistingUserMovie(state, movieId, { status: newStatus })
            : addNewMovieToUserMovies(state, {
                id: movieId,
                status: newStatus,
              });
        });
        updateGlobalUser(set);
      },

      toggleFavoriteMovie: (movieId) => {
        set((state) => {
          const userMovie = state.currentUser.movies?.find(
            ({ id }) => id === movieId
          );

          return userMovie
            ? updateExistingUserMovie(state, movieId, {
                isFavorite: !userMovie.isFavorite,
              })
            : addNewMovieToUserMovies(state, { id: movieId, isFavorite: true });
        });
        updateGlobalUser(set);
      },

      makeUserSuper: (userId) => {
        set((state) => {
          const createdAt = new Date();
          const notification = {
            type: "moderator_access",
            createdBy: state.currentUser.id,
            createdAt,
            isRead: false,
          };
          return {
            users: state.users.map((user) =>
              userId === user.id
                ? {
                    ...user,
                    isSuperUser: true,
                    notifications: user.notifications
                      ? [...user.notifications, notification]
                      : [notification],
                  }
                : user
            ),
          };
        });
      },

      createFriendRequest: (userId) => {
        set((state) => {
          const newDate = new Date();
          const notification = {
            type: "friend_request",
            createdBy: state.currentUser.id,
            createdAt: newDate,
            isRead: false,
          };

          const newFriend = {
            id: userId,
            status: "requested",
            createdAt: newDate,
            updatedAt: newDate,
          };

          return {
            users: state.users.map((user) =>
              userId === user.id
                ? {
                    ...user,
                    notifications: user.notifications
                      ? [...user.notifications, notification]
                      : [notification],
                  }
                : user
            ),
            currentUser: {
              ...state.currentUser,
              friends: state.currentUser.friends
                ? [...state.currentUser.friends, newFriend]
                : [newFriend],
            },
          };
        });
        updateGlobalUser(set);
      },

      acceptFriendRequest: (userId) => {
        set((state) => {
          const newDate = new Date();
          const user = state.users.find(({ id }) => userId === id);
          const request = user.friends.find(
            ({ id }) => id === state.currentUser.id
          );
          const newNotification = {
            type: "friend_accept",
            createdBy: state.currentUser.id,
            createdAt: newDate,
            isRead: false,
          };
          const updatedUser = {
            ...user,
            friends: user.friends.map((friend) =>
              friend.id === state.currentUser.id
                ? { ...friend, status: "friend", updatedAt: newDate }
                : friend
            ),
            notifications: user.notifications
              ? [...user.notifications, newNotification]
              : [newNotification],
          };
          const newFriend = {
            id: userId,
            status: "friend",
            createdAt: request.createdAt,
            updatedAt: newDate,
          };

          return {
            users: state.users.map((user) =>
              userId === user.id ? updatedUser : user
            ),
            currentUser: {
              ...state.currentUser,
              friends: state.currentUser.friends
                ? [...state.currentUser.friends, newFriend]
                : [newFriend],
            },
          };
        });
        updateGlobalUser(set);
      },

      declineFriendRequest: (userId) => {
        set((state) => {
          const newDate = new Date();
          const user = state.users.find(({ id }) => userId === id);

          const newNotification = {
            type: "friend_decline",
            createdBy: state.currentUser.id,
            createdAt: newDate,
            isRead: false,
          };

          const updatedUser = {
            ...user,
            friends: user.friends.filter(
              (friend) => friend.id !== state.currentUser.id
            ),
            notifications: user.notifications
              ? [...user.notifications, newNotification]
              : [newNotification],
          };

          return {
            users: state.users.map((user) =>
              userId === user.id ? updatedUser : user
            ),
          };
        });
      },

      unfriend: (userId) => {
        set((state) => {
          const user = state.users.find(({ id }) => userId === id);

          const updatedUser = {
            ...user,
            friends: user.friends.filter(
              (friend) => friend.id !== state.currentUser.id
            ),
          };

          return {
            users: state.users.map((user) =>
              userId === user.id ? updatedUser : user
            ),
            currentUser: {
              ...state.currentUser,
              friends: state.currentUser.friends.filter(
                (friend) => friend.id !== userId
              ),
            },
          };
        });
        updateGlobalUser(set);
      },

      deleteAllNotifications: () => {
        set((state) => ({
          currentUser: { ...state.currentUser, notifications: [] },
        }));
        updateGlobalUser(set);
      },
      makeAllNotificationsRead: () => {
        set((state) => ({
          currentUser: {
            ...state.currentUser,
            notifications: state.currentUser.notifications?.map(
              (notification) => ({
                ...notification,
                isRead: true,
              })
            ),
          },
        }));
        updateGlobalUser(set);
      },
    }),
    { name: "user-storage" }
  )
);

const addNewMovieToUserMovies = (state, newMovie) => ({
  currentUser: {
    ...state.currentUser,
    movies: state.currentUser.movies
      ? [...state.currentUser.movies, newMovie]
      : [newMovie],
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

const updateGlobalUser = (set) => {
  set((state) => ({
    users: state.users.map((user) =>
      state.currentUser.id === user.id ? state.currentUser : user
    ),
  }));
};

export default useUserStore;
