import { StyleSheet, View } from "react-native";
import Days from "./components/Days";
import Tareas from "./components/Tareas";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Days />
        <Tareas />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // marginTop: 30,
  },
});
