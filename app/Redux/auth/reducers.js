import {
  REQUEST_LOADING,
  REQUEST_ERROR,
  REQUEST_SUCCESSFUL,
} from "./authActions";

const initialState = {
  status: null,
  loading: true,
  error: "",
};

const authReducer = (state = initialState, action) => {
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

export default authReducer;
