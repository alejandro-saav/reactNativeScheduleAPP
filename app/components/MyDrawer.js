import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import Header from "./Header";
import home from "../home";
import Test from "../Test";
import Login from "../Login";

const MyDrawer = () => {
  function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Feed Screen</Text>
      </View>
    );
  }

  function Notifications() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Notifications Screen</Text>
      </View>
    );
  }

  function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }

  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="/home"
      screenOptions={{
        header: (props) => {
          return <Header toggle={props.navigation.toggleDrawer} />;
        },
        drawerStyle: { paddingTop: 30 },
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={home}
        options={{ drawerLabel: "Inicio" }}
      />
      <Drawer.Screen
        name="Grupo"
        component={Notifications}
        options={{ drawerLabel: "Grupo" }}
      />
      <Drawer.Screen
        name="Horario"
        component={Profile}
        options={{ drawerLabel: "Horario" }}
      />
      <Drawer.Screen
        name="Materias"
        component={Profile}
        options={{ drawerLabel: "Materias" }}
      />
      <Drawer.Screen
        name="Test"
        component={Test}
        options={{ drawerLabel: "Test" }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{ drawerLabel: "Login" }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
