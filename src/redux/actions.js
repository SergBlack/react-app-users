import { acts } from './types';
import axios from 'axios';

export const fetchUsers = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://reqres.in/api/users');
      dispatch({ type: acts.FETCH_USERS, payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const setSelectedPage = (page) => {
  return async dispatch => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      dispatch({ type: acts.SET_SELECTED_PAGE, payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};
