import axios from 'axios';
export const REQUEST_SENT = 'REQUEST_SENT';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const TOGGLE_SELECTED = 'TOGGLE_SELECTED';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';

export const requestFriends = () => (dispatch) => {
	dispatch({ type: REQUEST_SENT });
	axios
		.get('http://localhost:5000/api/friends')
		.then((response) => {
			response.data.forEach((item) => {
				item.selected = false;
			});
			dispatch({ type: REQUEST_SUCCESS, payload: response.data });
		})
		.catch((err) => {
			dispatch({ type: REQUEST_ERROR, err });
		});
};

export const toggleSelected = (index) => {
	return {
		type: TOGGLE_SELECTED,
		payload: index
	};
};

export const addFriend = (friend) => (dispatch) => {
	dispatch({ type: ADD_FRIEND });
	axios
		.post(`http://localhost:5000/api/friends`, friend)
		.then((response) => {
			response.data.forEach((item) => {
				item.selected = false;
			});
			dispatch({ type: REQUEST_SUCCESS, payload: response.data });
		})
		.catch((err) => {
			dispatch({ type: REQUEST_ERROR, err });
		});
};

export const deleteFriend = (id) => (dispatch) => {
	dispatch({ type: DELETE_FRIEND });
	axios
		.delete(`http://localhost:5000/api/friends/${id}`)
		.then((response) => {
			dispatch({ type: REQUEST_SUCCESS, payload: response.data });
		})
		.catch((err) => {
			dispatch({ type: REQUEST_ERROR, err });
		});
};

export const updateFriend = (friend, id) => (dispatch) => {
	dispatch({ type: UPDATE_FRIEND });
	axios
		.put(`http://localhost:5000/api/friends/${id}`, friend)
		.then((response) => {
			response.data.forEach((item) => {
				item.selected = false;
			});
			dispatch({ type: REQUEST_SUCCESS, payload: response.data });
		})
		.catch((err) => {
			dispatch({ type: REQUEST_ERROR, err });
		});
};
