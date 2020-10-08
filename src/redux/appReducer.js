import { acts } from './types';

const initialState = {
  loading: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case acts.SHOW_PRELOADER: {
      return {
        ...state,
        loading: true,
      };
    }
    case acts.HIDE_PRELOADER: {
      return {
        ...state,
        loading: false,
      };
    }
    default: return state;
  }
};
