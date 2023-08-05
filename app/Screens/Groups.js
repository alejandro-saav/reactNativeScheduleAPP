import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const Groups = () => {
  const tiene_grupos = true;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mis Grupos</Text>
      {tiene_grupos ? "joda" : "nojoda"}
    </View>
  );
};

export default Groups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 30,
    padding: 10,
  },
});
