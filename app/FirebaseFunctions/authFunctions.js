import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const createAccount = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
};

//* In singing in function i must store the extra data in firestore and just get the user and password from firebase auth

const signIn = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
};

const signOutFunction = async (auth) => {
  const response = signOut(auth);
};
