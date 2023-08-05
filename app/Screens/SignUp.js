import { View, StyleSheet } from "react-native";
import { useKeyboard } from "@react-native-community/hooks";
import ProfileImagePicker from "../components/signupcomponents/ProfileImagePicker";
import SignUpInputs from "../components/signupcomponents/SignUpInputs";
import { useState } from "react";

const SignUp = () => {
  const { keyboardShown } = useKeyboard();
  const [image, setIMG] = useState(null);
  return (
    <View style={[styles.container, keyboardShown ? { marginTop: 0 } : null]}>
      <ProfileImagePicker profileImage={image} setIMG={setIMG} />
      <SignUpInputs profileImage={image} />
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
