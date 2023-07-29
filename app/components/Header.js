import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FONT, SIZES } from "../../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const Header = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {/* <NavigationContainer independent={true}>
        <MyDrawer />
      </NavigationContainer> */}
      <TouchableOpacity style={styles.icon} onPress={() => props.toggle()}>
        <AntDesign name="bars" size={40} />
      </TouchableOpacity>
      <Text style={styles.header}>ScheduleAPP</Text>
      <Image
        style={styles.profilePicture}
        source={{
          uri: "https://www.terra.com.mx/u/fotografias/m/2021/2/12/f638x638-14899_73066_6368.jpg",
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
    // backgroundColor: "#444",
  },
  drawerContainer: {},
  icon: {},
  profilePicture: {
    height: 30,
    width: 30,
    backgroundColor: "orange",
    borderRadius: 50,
  },
  header: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
});

export default Header;
