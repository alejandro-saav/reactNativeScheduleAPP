import { auth } from "../../../Firebase";
import { db } from "../../../Firebase";
import { setDoc, doc, getDoc, addDoc, collection } from "firebase/firestore";
//* auth.currentUser.uid

export const REQUEST_LOADING = "REQUEST_LOADING";
export const REQUEST_ERROR = "REQUEST_ERROR";
export const REQUEST_SUCCESSFUL = "REQUEST_SUCCESSFUL";

export function requestLoading() {
  return {
    type: REQUEST_LOADING,
    payload: false,
  };
}

export function requestError(error) {
  return {
    type: REQUEST_ERROR,
    payload: error,
  };
}

export function requestSuccessful() {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: true,
  };
}
console.log(auth);
export const createNewGroup = (groupData) => async (dispatch) => {
  console.log(auth.useruid);
  // const userRef = db.collection("Users").doc(auth.useruid);
  try {
    dispatch(requestLoading());
    await addDoc(
      collection(db, `Users/${auth.currentUser.uid}/groups`),
      groupData
    );
    dispatch(requestSuccessful());
  } catch (error) {
    dispatch(requestError(error.message));
  }
};

//* GET USER GROUPS
//   const jeje = async () => {
//     const groupsRef = collection(db, "Groups");
//     const userRef = doc(db, "Users", auth.currentUser.uid);
//     // const docRef = doc(db, "Users", auth.currentUser.uid);
//     console.log(auth.currentUser.uid);
//     const q = query(groupsRef, where("members", "array-contains", userRef));
//     console.log(q);
//     try {
//       const querySnapshot = await getDocs(q);
//       console.log(querySnapshot);
//       querySnapshot.forEach((doc) => {
//         const groupData = doc.data();
//         console.log(groupData);
//         console.log("Group ID:", doc.id);
//         console.log("Group Name:", groupData.name);
//         // Handle other group data as needed
//       });
//     } catch (error) {
//       console.error("Error querying groups:", error);
//     }
//   };
//   console.log(jeje());
// }, []);
