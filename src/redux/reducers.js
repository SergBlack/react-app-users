import { acts } from './types';

const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case acts.FETCH_USERS: {
      return {
        ...state,
        users: [...action.payload],
      };
    }
    default: return state;
  }
};
