import { View, StyleSheet } from "react-native";
import { FONT, COLORS, SIZES } from "../constants/theme";
import { useKeyboard } from "@react-native-community/hooks";
import ProfileImagePicker from "./components/ProfileImagePicker";
import SignUpInputs from "./components/SignUpInputs";

const SignUp = () => {
  const { keyboardShown } = useKeyboard();
  return (
    <View style={[styles.container, keyboardShown ? { marginTop: 0 } : null]}>
      <ProfileImagePicker />
      <SignUpInputs />
    </View>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
  },
});
