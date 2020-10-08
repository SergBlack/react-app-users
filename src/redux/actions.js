import { acts } from './types';
import axios from 'axios';

export const fetchUsers = () => {
  return async dispatch => {
    dispatch({ type: acts.SHOW_PRELOADER });
    try {
      const response = await axios.get('https://reqres.in/api/users');
      dispatch({ type: acts.FETCH_USERS, payload: response.data });
      dispatch({ type: acts.HIDE_PRELOADER });
    } catch (e) {
      console.log(e);
      dispatch({ type: acts.HIDE_PRELOADER });
    }
  };
};

export const fetchUser = (id) => {
  return async dispatch => {
    dispatch({ type: acts.SHOW_PRELOADER });
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      dispatch({ type: acts.FETCH_USER, payload: response.data });
      dispatch({ type: acts.HIDE_PRELOADER });
    } catch (e) {
      console.log(e);
      dispatch({ type: acts.HIDE_PRELOADER });
    }
  };
};

export const setSelectedPage = (page) => {
  return async dispatch => {
    dispatch({ type: acts.SHOW_PRELOADER });
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      dispatch({ type: acts.SET_SELECTED_PAGE, payload: response.data });
      dispatch({ type: acts.HIDE_PRELOADER });
    } catch (e) {
      console.log(e);
      dispatch({ type: acts.HIDE_PRELOADER });
    }
  };
};

export const addUser = (name, job) => {
  return async dispatch => {
    try {
      const response = await axios.post(
        'https://reqres.in/api/users',
        {
          name,
          job,
        },
      );
      dispatch({ type: acts.ADD_USER, payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const updateUser = (id, name, job) => {
  return async dispatch => {
    try {
      const response = await axios.put(
        `https://reqres.in/api/users${id}`,
        {
          name,
          job,
        },
      );
      dispatch({ type: acts.UPDATE_USER, payload: response.data, userId: id });
    } catch (e) {
      console.log(e);
    }
  };
};

export const removeUser = (id) => {
  return async dispatch => {
    try {
      await axios.delete(`https://reqres.in/api/users${id}`);
      dispatch({ type: acts.REMOVE_USER, userId: id });
    } catch (e) {
      console.log(e);
    }
  };
};
