import { types } from "../Types/types";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.register:
      return {
        ...state,
        user: { ...action.payload },
      };
    case types.login:
      return {
        ...state,
        user: { ...action.payload },
      };
    case types.logout:
      return {
        ...state,
        user: null,
      };
    case types.followUser:
      return {
        ...state,
        user: {
          ...state.user,
          following: [...state.user.following, action.payload],
        },
      };
    case types.unfollowUser:
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.filter(
            (foll) => foll !== action.payload
          ),
        },
      };
    case types.createPlaylist: {
      return {
        ...state,
        user: {
          ...state.user,
          playlists: [...state.user.playlists, action.payload],
        },
      };
    }
    case types.togglePlaylistVisibility: {
      return {
        ...state,
        user: {
          ...state.user,
          playlists: [...action.payload],
        },
      };
    }
    case types.deletePlaylist: {
      return {
        ...state,
        user: {
          ...state.user,
          playlists: [...action.payload],
        },
      };
    }
    default:
      state;
  }
};

export default userReducer;
