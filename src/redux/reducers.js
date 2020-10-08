import { acts } from './types';

const initialState = {
  users: [],
  currentPage: null,
  numOfUsersPerPages: null,
  totalUsers: null,
  totalPages: null,
  ad: {},
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case acts.FETCH_USERS: {
      const {
        data, page, per_page, total, total_pages, ad,
      } = action.payload;
      return {
        ...state,
        users: data,
        currentPage: page,
        numOfUsersPerPages: per_page,
        totalUsers: total,
        totalPages: total_pages,
        ad,
      };
    }
    case acts.SET_SELECTED_PAGE: {
      const { data, page } = action.payload;
      return {
        ...state,
        users: data,
        currentPage: page,
      };
    }
    case acts.ADD_USER: {
      const { id, name, job, createdAt } = action.payload;
      return {
        ...state,
        users: [
          ...state.users,
          {
            id,
            first_name: name,
            job,
            createdAt,
          },
        ],
      };
    }
    default: return state;
  }
};
