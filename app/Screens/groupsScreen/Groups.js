import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//*
import { doc, getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../Firebase";
import { auth } from "../../../Firebase";
import { useEffect } from "react";

const Groups = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mis Grupos</Text>
      <View>
        <Text>Groups Container</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text>ADD NEW GROUP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Groups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  header: {
    fontSize: 30,
    padding: 10,
  },
  btn: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#4a4a",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 50,
  },
});
