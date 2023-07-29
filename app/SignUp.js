import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { FONT, COLORS, SIZES } from "../constants/theme";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "./components/CustomInput";
import { useKeyboard } from "@react-native-community/hooks";
import profileIMG from "../assets/images/profileIMG.png";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";

const SignUp = () => {
  const [image, setImage] = useState(null);
  // const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const permi = await requestPermission();
    console.log(permi);
    if (permi.granted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } else {
      createTwoButtonAlert();
    }
  };
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
      <TouchableOpacity style={styles.imgProfile} onPress={pickImage}>
        <Image
          source={image ? { uri: image } : profileIMG}
          style={styles.img}
        />
        {!image ? (
          <Text style={styles.plusSign}>
            <AntDesign
              name="pluscircle"
              styles={styles.plusIcon}
              color="#89CFF0"
              size={20}
            />
          </Text>
        ) : (
          ""
        )}
      </TouchableOpacity>
      <ScrollView style={styles.inputView}>
        <View style={styles.loginContainer}>
          {/* <Text>Imagen de perfil</Text> */}
          {/* <CustomInput
            control={control}
            name="image_url"
            placeholder="Enlace de la imagen"
            rules={email_rules}
          /> */}
          <View style={styles.twoInputs}>
            <View style={styles.inputName}>
              {/* <Text>Nombre</Text> */}
              <CustomInput
                control={control}
                name="Nombre"
                placeholder="Nombre"
                rules={email_rules}
              />
            </View>
            <View style={styles.inputLastname}>
              {/* <Text>Apellido</Text> */}
              <CustomInput
                control={control}
                name="Apellido"
                placeholder="Apellido"
                rules={email_rules}
              />
            </View>
          </View>
          {/* <Text>Celular</Text> */}
          <CustomInput
            control={control}
            name="Celular"
            placeholder="Celular"
            rules={phone_rules}
            type={"numeric"}
          />
          {/* <Text>Correo</Text> */}
          <CustomInput
            control={control}
            name="Correo"
            placeholder="Correo"
            rules={email_rules}
          />
          {/* <Text>Contraseña</Text> */}
          <CustomInput
            control={control}
            name="Contraseña"
            placeholder="Contraseña"
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
      {/* <View style={styles.optionsContainer}></View> */}
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
  inputView: {
    width: "80%",
    borderRadius: 20,
    // height: 180,
    flexGrow: 0,
    marginBottom: 10,
  },
  loginContainer: {
    gap: 15,
  },
  optionsContainer: {},
  btn: {
    backgroundColor: "#89CFF0",
    paddingHorizontal: 64,
    paddingVertical: 12,
    borderRadius: 15,
  },
  avoidView: {},
  twoInputs: {
    paddingHorizontal: 4,
    // backgroundColor: "red",
    flexDirection: "row",
    // flex: 1,
    // width: "100%",
    justifyContent: "space-between",
    gap: 4,
  },
  inputName: {
    // backgroundColor: "black",
    width: "50%",
  },
  inputLastname: {
    // backgroundColor: "green",
    width: "50%",
  },
  imgProfile: {
    height: 120,
    width: 120,
    backgroundColor: COLORS.gray2,
    borderRadius: 500,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 500,
  },
  plusSign: {
    position: "absolute",
    bottom: 0,
    right: 15,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
  plusIcon: {
    borderRadius: 500,
  },
});
