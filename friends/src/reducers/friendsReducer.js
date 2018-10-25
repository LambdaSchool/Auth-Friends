import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE } from '../actions';
const initialState = {
  // supplied by Readme.md
  isFetching: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, isFetching: true };
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        friends: [...state.friends, ...action.payload]
      };
    case FETCHING_FRIENDS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};