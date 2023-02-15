import {
  CREATE_FORM_REQUEST,
  CREATE_FORM_SUCCESS,
  CREATE_FORM_ERROR,
  FETCH_FORM_REQUEST,
  FETCH_FORM_SUCCESS,
  FETCH_FORM_ERROR
} from '../actionType';

const initialState = {
  requests: [],
  error: null,
};

const formReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_FORM_REQUEST:
      return { ...state };
    case CREATE_FORM_SUCCESS:
      return { ...state };
    case CREATE_FORM_ERROR:
      return { ...state, error: action.error };
    case FETCH_FORM_REQUEST:
        return {...state};
    case FETCH_FORM_SUCCESS: 
    return {...state, requests: action.requests};
    case FETCH_FORM_ERROR: 
        return {...state, error: action.error};
    default:
        return state;
  }
};

export default formReducer;
