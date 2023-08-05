import { StyleSheet, View } from "react-native";
import Days from "../components/header/Days";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Days />
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
