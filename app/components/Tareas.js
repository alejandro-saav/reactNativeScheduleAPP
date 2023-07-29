import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SIZES, COLORS, SHADOWS, FONT } from "../../constants/theme";

const Actividades = () => {
  const actividades = [
    {
      tipo: "Clase",
      nombreMateria: "Calculo",
      profesor: "William",
      salon: "A404",
      tiempoRestante: "4 horas",
      horario: "6:00pm - 10:00pm",
    },
    {
      tipo: "Clase",
      nombreMateria: "DevOps",
      profesor: "Harol Cabrera",
      salon: "A501",
      tiempoRestante: "2 horas",
      horario: "6:00pm - 10:00pm",
    },
    {
      tipo: "Clase",
      nombreMateria: "Programacion",
      profesor: "Edward Reyes",
      salon: "A301",
      tiempoRestante: "22 horas",
      horario: "6:00pm - 10:00pm",
    },
  ];
  const tareas = [{}];
  const quizes = [{}];
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tres Actividades {"\n"} Para Hoy :(</Text>
      <FlatList
        data={actividades}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.actContainer}>
            <View style={styles.leftContainer}>
              <Text>
                <Text style={styles.type}>{item.tipo}</Text>
              </Text>
              <Text style={styles.name}>{item.nombreMateria}</Text>
              <Text style={styles.professor}>{item.profesor}</Text>
              <Text style={styles.room}>{item.salon}</Text>
              <Text style={styles.time}>{item.horario}</Text>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.clock}>{item.tiempoRestante}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b !== undefined ? b : a,
    paddingBottom: c !== undefined ? c : a,
    paddingLeft: d !== undefined ? d : b !== undefined ? b : a,
  };
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    textAlign: "center",
    padding: 10,
  },
  actContainer: {
    backgroundColor: COLORS.lightWhite,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    alignSelf: "stretch",
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
  },
  leftContainer: {
    width: "80%",
  },
  rightContainer: {
    width: "20%",
  },
  type: {
    fontSize: SIZES.xSmall,
    fontFamily: FONT.regular,
    backgroundColor: "#E3735E",
    color: COLORS.lightWhite,
    borderRadius: 5,
    // ...padding(10),
  },
  name: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
  },
  professor: {
    fontSize: SIZES.xSmall,
  },
  room: {},
  time: {},
});

export default Actividades;
