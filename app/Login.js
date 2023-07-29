import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { FONT, COLORS, SIZES } from "../constants/theme";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "./components/CustomInput";
import { useKeyboard } from "@react-native-community/hooks";

const Login = () => {
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const email_rules = {
    required: "El correo no puede estar vacio",
    maxLength: {
      value: 30,
      message: "El correo no debe pasar los 50 caracteres",
    },
    pattern: {
      value: EMAIL_REGEX,
      message: "Por favor introduzca un direccion de correo valida",
    },
  };
  const password_rules = {
    required: "Contraseña no puede estar vacio",
    minLength: {
      value: 7,
      message: "La contraseña debe tener minimo 7 caracteres",
    },
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitFunction = (props) => {
    console.log("BUTTON PRESSED");
  };
  const { keyboardShown } = useKeyboard();
  return (
    <View style={[styles.container, keyboardShown ? { marginTop: 0 } : null]}>
      <Image
        source={require("../assets/images/loginIMG.png")}
        style={styles.img}
      />
      <View style={styles.loginContainer}>
        <Text>Correo</Text>
        <CustomInput
          control={control}
          name="Correo"
          placeholder="Correo"
          rules={email_rules}
        />
        <Text>Contraseña</Text>
        <CustomInput
          control={control}
          name="Contraseña"
          placeholder="Contraseña"
          secureTextEntry={true}
          rules={password_rules}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={handleSubmit(submitFunction)}
      >
        <Text>Ingresar</Text>
      </TouchableOpacity>
      <View style={styles.optionsContainer}></View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
  },
  img: {
    marginBottom: 20,
  },
  loginContainer: {
    width: "80%",
    // backgroundColor: COLORS.gray2,
    borderRadius: 20,
    padding: 15,
  },
  optionsContainer: {},
  btn: {
    backgroundColor: "#89CFF0",
    paddingHorizontal: 64,
    paddingVertical: 12,
    borderRadius: 15,
  },
  avoidView: {},
});
