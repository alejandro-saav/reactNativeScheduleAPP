import { AUTH_LOADING, AUTH_ERROR, AUTH_SUCCESSFUL } from "./authActions";

const initialState = {
  status: null,
  loading: true,
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AUTH_SUCCESSFUL:
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
