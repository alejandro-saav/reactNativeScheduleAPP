import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import { signUpUser } from "../Redux/authRedux";
import { useDispatch } from "react-redux"; // Import the useDispatch hook

const SignUpInputs = () => {
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const ALPHABET_REGEX = /^[A-Za-z]+$/;
  const NUM_REGEX = /[0-9]+/;
  const name_rules = {
    required: "Este campo no puede estar vacio",
    maxLength: {
      value: 30,
      message: "Este campo no debe pasar los 30 caracteres",
    },
    pattern: {
      value: ALPHABET_REGEX,
      message: "Solo se permiten caracteres alfabeticos A-Z",
    },
  };
  const phone_rules = {
    required: "Este campo no puede estar vacio",
    maxLength: {
      value: 15,
      message: "Este campo no debe pasar los 15 caracteres",
    },
    pattern: {
      value: NUM_REGEX,
      message: "Solo se permiten numeros",
    },
  };
  const email_rules = {
    required: "El correo no puede estar vacio",
    maxLength: {
      value: 30,
      message: "El correo no debe pasar los 50 caracteres",
    },
    pattern: {
      value: EMAIL_REGEX,
      message: "Por favor introduzca una direccion de correo valida",
    },
  };
  const password_rules = {
    required: "Contraseña no puede estar vacio",
    minLength: {
      value: 7,
      message: "La contraseña debe tener minimo 7 caracteres",
    },
  };
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submitFunction = (data) => {
    dispatch(signUpUser(data.Correo, data.Contraseña));
  };
  return (
    <>
      <ScrollView style={styles.inputView}>
        <View style={styles.loginContainer}>
          <View style={styles.twoInputs}>
            <View style={styles.inputName}>
              <CustomInput
                control={control}
                name="Nombre"
                placeholder="Nombre"
                rules={name_rules}
              />
            </View>
            <View style={styles.inputLastname}>
              <CustomInput
                control={control}
                name="Apellido"
                placeholder="Apellido"
                rules={name_rules}
              />
            </View>
          </View>
          <CustomInput
            control={control}
            name="Celular"
            placeholder="Celular"
            rules={phone_rules}
            type={"numeric"}
          />
          <CustomInput
            control={control}
            name="Correo"
            placeholder="Correo"
            rules={email_rules}
          />
          <CustomInput
            control={control}
            name="Contraseña"
            placeholder="Contraseña"
            secureTextEntry={true}
            rules={password_rules}
          />
          <CustomInput
            control={control}
            name="Contraseña"
            placeholder="Confirmar Contraseña"
            secureTextEntry={true}
            rules={password_rules}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.btn}
        onPress={handleSubmit(submitFunction)}
      >
        <Text>Ingresar</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: "80%",
    borderRadius: 20,
    flexGrow: 0,
    marginBottom: 10,
  },
  loginContainer: {
    gap: 15,
  },
  twoInputs: {
    paddingHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
  },
  inputName: {
    width: "50%",
  },
  inputLastname: {
    width: "50%",
  },
  btn: {
    backgroundColor: "#89CFF0",
    paddingHorizontal: 64,
    paddingVertical: 12,
    borderRadius: 15,
  },
});

export default SignUpInputs;
