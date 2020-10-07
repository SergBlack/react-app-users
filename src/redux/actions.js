import { acts } from './types';
import axios from 'axios';

export const fetchUsers = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://reqres.in/api/users');
      dispatch({ type: acts.FETCH_USERS, payload: response.data.data });
    } catch (e) {
      console.log(e);
    }
  }
};
