import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useForm } from "react-hook-form";
import CustomInput from "../components/customInput/CustomInput";
import { useKeyboard } from "@react-native-community/hooks";
import { loginUser } from "../Redux/auth/authActions";
import { useDispatch } from "react-redux";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  //* Input rules
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
  //*-------------------------------------------------------------

  const { control, handleSubmit } = useForm();
  //* SUBMIT FUNCTION DISPATCH ACTION

  const submitFunction = async (data) => {
    dispatch(loginUser(data.Correo, data.Contraseña));
  };

  const { keyboardShown } = useKeyboard();
  return (
    <View style={[styles.container, keyboardShown ? { marginTop: 0 } : null]}>
      <Image
        source={require("../../assets/images/loginIMG.png")}
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
      <TouchableOpacity
        style={styles.signUpBtn}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.signUpTxt}>Crear una cuenta -</Text>
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
    marginBottom: 10,
    borderRadius: 50,
  },
  loginContainer: {
    width: "80%",
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
  signUpBtn: {
    // backgroundColor: "#e1e",
    paddingVertical: 2,
    paddingHorizontal: 4,
    marginTop: 10,
  },
  signUpTxt: {
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#111",
  },
});
