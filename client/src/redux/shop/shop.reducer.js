import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} from './shops.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: ''
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };

    case FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: payload, isFetching: false };

    case FETCH_COLLECTIONS_FAILURE:
      return { ...state, isFetching: false, errorMessage: payload };

    default:
      return state;
  }
};

export default shopReducer;
