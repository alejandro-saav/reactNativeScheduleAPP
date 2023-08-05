import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { auth } from "../../Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { db } from "../../Firebase";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const REQUEST_LOADING = "REQUEST_LOADING";
const REQUEST_ERROR = "REQUEST_ERROR";
const REQUEST_SUCCESSFUL = "REQUEST_SUCCESSFUL";
console.log(auth);

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
  loading: true,
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

//* STORE DATA LOCALLY
const storeData = async (userData) => {
  try {
    const jsonUser = JSON.stringify(userData);
    await AsyncStorage.setItem("user", jsonUser);
  } catch (e) {
    // saving error
  }
};

//* GET USER DATA LOCALLY IF EXIST
export function fetchLocalData() {
  return async (dispatch) => {
    try {
      dispatch(requestLoading());

      // Fetch data from local storage
      const jsonUser = await AsyncStorage.getItem("user");
      if (jsonUser) {
        const userData = JSON.parse(jsonUser);
        dispatch(requestSuccessful(userData));
      } else {
        // If no data found in local storage, you can handle it as needed.
        // For example, you could set a default state or show an empty state in your UI.
        dispatch(requestSuccessful(null));
      }
    } catch (error) {
      dispatch(requestError("Failed to fetch data from local storage."));
    }
  };
}

//* REMOVE USER DATA LOCALLY WHEN LOGING OUT
const removeValue = async () => {
  try {
    await AsyncStorage.removeItem("user");
  } catch (e) {
    // remove error
  }
};
//* FIRESTORE FUNCTION

// const addUserFirestore = () => {}

//* AUTH FUNCTIONS

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(requestLoading());
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    //* Get user data from firestore
    const docRef = doc(db, "Users", userCredential.user.uid);
    const docSnap = await getDoc(docRef);
    storeData(docSnap.data());
    dispatch(requestSuccessful(docSnap.data()));
  } catch (error) {
    dispatch(requestError(error.message));
  }
};

export const signUpUser = (userData) => async (dispatch) => {
  try {
    dispatch(requestLoading());
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.Correo,
      userData.Contraseña
    );

    //* Add user to firestore
    delete userData.Contraseña;
    await setDoc(doc(db, "Users", userCredential.user.uid), userData);
    storeData(docSnap.data());
    dispatch(requestSuccessful(userData));
  } catch (error) {
    dispatch(requestError(error.message));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(requestLoading());
    await signOut(auth);
    dispatch(requestSuccessful(null));
    removeValue();
  } catch (error) {
    dispatch(requestError(error.message));
  }
};

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
export default store;
