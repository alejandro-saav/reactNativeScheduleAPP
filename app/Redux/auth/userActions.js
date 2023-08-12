//* auth.currentUser.uid

export const getUserGroups = (userId) => async (dispatch) => {
  const userGroupsRef = firebase
    .firestore()
    .collection(`Users/${userId}/groups`);
  try {
    const userGroupsSnapshot = await userGroupsRef.get();

    const userGroups = userGroupsSnapshot.docs.map((doc) => {
      const groupData = doc.data();
      return {
        groupId: doc.id,
        name: groupData.name,
        // Add more fields if needed
      };
    });

    return userGroups;
  } catch (error) {
    dispatch(requestError(error.message));
    return [];
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
