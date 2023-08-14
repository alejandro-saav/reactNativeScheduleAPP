import {
  REQUEST_LOADING,
  REQUEST_ERROR,
  REQUEST_SUCCESSFUL,
} from "./userActions";

const initialState = {
  status: null,
  loading: false,
  error: "",
};

const firestoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case REQUEST_SUCCESSFUL:
      return {
        status: action.payload,
        loading: false,
        error: "",
      };
    default:
      return state;
  }
};

export default firestoreReducer;
