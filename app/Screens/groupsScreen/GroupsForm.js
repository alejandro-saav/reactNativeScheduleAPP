import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import CustomInput from "../../components/customInput/CustomInput";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createNewGroup } from "../../Redux/auth/userActions";
import { useSelector } from "react-redux";

const GroupsForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.fire.loading); // Use useSelector to access the state
  const state = useSelector((state) => state.fire);
  console.log(state); // Use useSelector to access the state
  const ALPHABET_REGEX = /^[a-zA-Z]*$/;
  const NAME_RULES = {
    required: "Este campo no puede estar vacio",
    maxLength: {
      value: 30,
      message: "El nombre no debe pasar los 50 caracteres",
    },
    pattern: {
      value: ALPHABET_REGEX,
      message:
        "No se permiten caracteres especiales solo caracteres del alfabeto.",
    },
  };
  const DES_RULES = {
    required: "Este campo no puede estar vacio",
    maxLength: {
      value: 500,
      message: "La descripcion no debe pasar los 500 caracteres",
    },
    pattern: {
      value: ALPHABET_REGEX,
      message:
        "No se permiten caracteres especiales solo caracteres del alfabeto.",
    },
  };
  const MEM_RULES = {
    required: "Este campo no puede estar vacio",
    maxLength: {
      value: 30,
      message: "Este campo no debe pasar los 50 caracteres",
    },
    pattern: {
      value: ALPHABET_REGEX,
      message:
        "No se permiten caracteres especiales solo caracteres del alfabeto.",
    },
  };
  const { control, handleSubmit, reset } = useForm();

  const submitFunction = async (data) => {
    //*DISPATCH SOMETHING I GUESS SO
    dispatch(createNewGroup(data));
  };

  const descInputStyles = {
    height: 100,
    borderColor: "#94ADD7",
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 5,
    textAlignVertical: "top",
    padding: 5,
    fontSize: 15,
  };
  return (
    <View style={styles.papa}>
      <Text style={styles.hedTitle}>
        Fill all the fields to add a new group!
      </Text>
      <ScrollView style={styles.inputContainer}>
        <View>
          <Text>Nombre</Text>
          <CustomInput
            control={control}
            name="Name"
            placeholder="Nombre del grupo"
            rules={NAME_RULES}
          />
        </View>
        <View>
          <Text>Descripcion</Text>
          <CustomInput
            control={control}
            name="Description"
            placeholder="Descripcion maximo 500 caracteres..."
            multiline={true}
            customStyles={descInputStyles}
            rules={DES_RULES}
          />
        </View>
        <View>
          <Text>Agregar miembros</Text>
          <CustomInput
            control={control}
            placeholder="Miembros..."
            multiline={true}
            name="Members"
            rules={MEM_RULES}
          />
        </View>
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={handleSubmit(submitFunction)}
        >
          {loading ? (
            <View style={styles.loading}>
              <ActivityIndicator size="small" color="#FFFFFF" />
            </View>
          ) : (
            <Text>Crear grupo</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default GroupsForm;

const styles = StyleSheet.create({
  papa: { flex: 1 },
  hedTitle: {
    fontSize: 20,
    fontWeight: 700,
    padding: 20,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 10,
    // marginVertical: 10,
  },
  submitBtn: {
    marginTop: 10,
    backgroundColor: "#89CFF0",
    paddingVertical: 4,
    paddingHorizontal: 8,
    width: "40%",
    marginLeft: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
