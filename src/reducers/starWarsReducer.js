import {
  FETCH_CHAR_FAIL,
  FETCH_CHAR_START,
  FETCH_CHAR_SUCCESS
} from "../actions";

const initialState = {
  // Array of characters, Boolean fetching, null error.
  characters: [],
  error: null,
  fetching: false,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_CHAR_START:
      return {
        ...state,
        error: '',
        fetching: true
      };

    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        characters: action.payload.results,
        error: '',
        fetching: false
      };

    case FETCH_CHAR_FAIL:    
      return {
        ...state,
        error: action.payload,
        fetching: false
      }

    default:
      return state;
  }
};
