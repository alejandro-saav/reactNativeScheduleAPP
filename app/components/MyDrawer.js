import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Header from "./header/Header";
import home from "../Screens/Home";
// import Groups from "../Screens/groupsScreen/Groups";
import { logoutUser } from "../Redux/auth/authActions";
import { useDispatch } from "react-redux";
import GroupsTabNavigator from "../Screens/groupsScreen/GroupsStackNavigator";

const MyDrawer = () => {
  const dispatch = useDispatch();
  const Drawer = createDrawerNavigator();
  const logout = () => {
    dispatch(logoutUser());
  };

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
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
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen name="Home" component={home} />
      <Drawer.Screen name="Grupos" component={GroupsTabNavigator} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
