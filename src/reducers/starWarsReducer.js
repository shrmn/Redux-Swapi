import {
  FETCH_CHAR_FAIL,
  FETCH_CHAR_START,
  FETCH_CHAR_SUCCESS
} from "../actions";

const initialState = {
  // Array of characters, Boolean fetching, null error.
  characters: [],
  error: null,
  isFetching: false,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_CHAR_START:
      return {
        ...state,
        error: '',
        isFetching: true
      };

    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        error: '',
        isFetching: false
      };

    case FETCH_CHAR_FAIL:    
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }

    default:
      return state;
  }
};
