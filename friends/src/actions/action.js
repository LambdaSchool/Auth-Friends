import axios from 'axios';

export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const SUCCESS = "SUCCESS";

export const ADD_FRIEND = 'ADD_FRIEND';

export const getFriends = () => {
    return dispatch => {
           dispatch({type: LOADING});
           axios.get('http://localhost:5000/api/friends')
                .then( response => {
                //   console.log(response.data);
                   dispatch({type:SUCCESS, payload: response.data})
                })
                .catch( error => {
                    dispatch({type: ERROR, payload: "You are not getting friends here.."})
                })

    }
}

export const addFriends  = (newFriend) => {
     return dispatch => {
            dispatch({type: LOADING});
            axios.get('http://localhost:5000/api/friends', newFriend)
            .then( response => {
                // console.log(response.data);
                 dispatch({type:ADD_FRIEND, payload: response.data})
              })
              .catch( error => {
                  dispatch({type: ERROR, payload: "Unable to add your friend"})
              })

     }
}