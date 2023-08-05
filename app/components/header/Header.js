import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FONT, SIZES } from "../../../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const userData = useSelector((state) => state.status);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={() => props.toggle()}>
        <AntDesign name="bars" size={30} />
      </TouchableOpacity>
      <Text style={styles.header}>ScheduleAPP</Text>
      {userData.profileImage ? (
        <Image
          style={styles.profilePicture}
          source={{
            uri: userData.profileImage,
          }}
        />
      ) : (
        <TouchableOpacity style={styles.defaultProfilePic}>
          <Text style={styles.profileText}>
            {userData.Nombre.charAt(0).toUpperCase()}
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
  drawerContainer: {},
  icon: {},
  profilePicture: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  header: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  defaultProfilePic: {
    width: 30,
    height: 30,
    backgroundColor: "#aaa",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    textAlign: "center",
  },
});

export default Header;
