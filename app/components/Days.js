import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FONT, COLORS, SIZES } from "../../constants/theme";

const Days = () => {
  const getCurrentDate = () => {
    const days = ["Hoy", "Mañana"];
    const currentDate = new Date();

    for (let i = 2; i < 8; i++) {
      const nextDate = new Date();
      nextDate.setDate(currentDate.getDate() + i);
      const dayName = getFormattedDate(nextDate);
      days.push(dayName);
    }

    return days;
  };

  const getFormattedDate = (date) => {
    const options = { weekday: "short", day: "numeric" };
    return new Intl.DateTimeFormat("es-US", options).format(date);
  };

  const days = getCurrentDate();
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        style={styles.flatlist}
        renderItem={(item) => (
          <TouchableOpacity>
            <Text style={styles.days}>{item.item}</Text>
          </TouchableOpacity>
        )}
        horizontal
      />
    </View>
  );
};
export default Days;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  flatlist: {
    paddingHorizontal: 20,
  },
  days: {
    fontFamily: FONT.regular,
    color: COLORS.primary,
    backgroundColor: COLORS.white,
    fontSize: 14,
    marginRight: 5,
    borderRadius: 50,
    padding: 5,
  },
});
