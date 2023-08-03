import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { auth } from "../../Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const REQUEST_LOADING = "REQUEST_LOADING";
const REQUEST_ERROR = "REQUEST_ERROR";
const REQUEST_SUCCESSFUL = "REQUEST_SUCCESSFUL";

function requestLoading() {
  return {
    type: REQUEST_LOADING,
  };
}

function requestError(error) {
  return {
    type: REQUEST_ERROR,
    payload: error,
  };
}

function requestSuccessful(user) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: user,
  };
}

const initialState = {
  status: null,
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
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

//* AUTH FUNCTIONS

export const loginUser = (email, password) => async (dispatch) => {
  console.log(auth);
  try {
    dispatch(requestLoading());
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch(requestSuccessful(userCredential));
    console.log(userCredential);
  } catch (error) {
    dispatch(requestError(error.message));
  }
};

export const signUpUser = (email, password) => async (dispatch) => {
  try {
    dispatch(requestLoading());
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch(requestSuccessful(userCredential.user));
    console.log(userCredential);
  } catch (error) {
    dispatch(requestError(error.message));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(requestLoading());
    await signOut(auth);
    dispatch(requestSuccessful(null));
  } catch (error) {
    dispatch(requestError(error.message));
  }
};

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
export default store;
