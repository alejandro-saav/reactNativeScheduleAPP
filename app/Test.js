import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { app, FIRESTORE } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

const Test = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(FIRESTORE, "myCollection")
        );
        querySnapshot.forEach((doc) => {
          console.log(doc);
          console.log(`${doc.id} => ${doc.data()}`);
        });
        console.log(querySnapshot);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {data.map((item) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  );
};

export default Test;
