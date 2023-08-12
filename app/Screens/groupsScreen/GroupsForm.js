import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../../components/customInput/CustomInput";
import { useForm } from "react-hook-form";
import { TextInput } from "react-native-paper";

const GroupsForm = () => {
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const email_rules = {
    required: "Este campo no puede estar vacio",
    maxLength: {
      value: 30,
      message: "El correo no debe pasar los 50 caracteres",
    },
    pattern: {
      value: EMAIL_REGEX,
      message: "Por favor introduzca un direccion de correo valida",
    },
  };
  const { control, handleSubmit } = useForm();
  return (
    <View>
      <Text>Fill all the fields to add a new group!</Text>
      <View style={styles.inputContainer}>
        <Text>Nombre</Text>
        <CustomInput
          control={control}
          name="Nombre"
          placeholder="Nombre del grupo"
          rules={email_rules}
        />
        <Text>Descripcion</Text>
        <TextInput
          label="Email"
          multiline={true}
          style={styles.descInput}
          // dense={true}
          // onChangeText={(text) => setText(text)}
        />
        <Text>Agregar miembros</Text>
        <TextInput
          label="Email"
          multiline={true}
          // onChangeText={(text) => setText(text)}
        />
      </View>
    </View>
  );
};

export default GroupsForm;

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 20,
  },
  descInput: {
    backgroundColor: "#fff",
    height: 100,
    textAlign: "left",
  },
});
