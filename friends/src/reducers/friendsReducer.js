import { FETCHING, FETCHED, ERROR } from '../actions';




const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null};

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING:
        return Object.assign({}, state, {
            fetchingFriends:true
        })
      case ERROR:
      return Object.assign({}, state, {
        fetchingFriends:false, 
        error:action.payload
      })
      case FETCHED:
        return Object.assign({}, state, {
            fetchingFriends: false,
            friendsFetched: true,
            friends:action.payload
        });
        default:
        return state;
    }
}