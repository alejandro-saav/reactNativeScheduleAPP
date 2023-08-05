import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Header from "./header/Header";
import home from "../Screens/Home";
import Groups from "../Screens/Groups";
import { logoutUser } from "../Redux/authRedux";
import { useDispatch } from "react-redux";

const MyDrawer = () => {
  const dispatch = useDispatch();
  const Drawer = createDrawerNavigator();
  const logout = () => {
    dispatch(logoutUser());
  };

  const CustomDrawerContent = ({ navigation }) => {
    return (
      <DrawerContentScrollView>
        <DrawerItem label="Home" onPress={() => navigation.navigate("Home")} />
        <DrawerItem label="Log out" onPress={logout} />
      </DrawerContentScrollView>
    );
  };
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="/home"
      screenOptions={{
        header: (props) => {
          return <Header toggle={props.navigation.toggleDrawer} />;
        },
        gestureEnabled: true,
        drawerStyle: { paddingTop: 30 },
      }}
      // drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen name="Home" component={home} />
      <Drawer.Screen name="Grupos" component={Groups} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
