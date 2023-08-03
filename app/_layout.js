import { useFonts } from "expo-font";
import Header from "./components/Header";
import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./components/MyDrawer";
import { SafeAreaView } from "react-native";
import Login from "./Login";
import SignUp from "./SignUp";
import { Provider } from "react-redux";
import store from "./Redux/authRedux";
import { useSelector } from "react-redux";
export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};
// console.log(store.subscribe(() => console.log(store.getState().status)));

const Layout = () => {
  const user = useSelector((state) => state.status); // Use useSelector to access the state
  console.log(user);
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  // return <Header />;
  return (
    // <Stack initialRouteName="home">
    //   <Stack.Screen
    //     name="home"
    //     options={{
    //       header: (props) => (
    //         <NavigationContainer independent={true}>
    //           <MyDrawer />
    //         </NavigationContainer>
    //       ),
    //     }}
    //   />
    // </Stack>
    // <Stack initialRouteName="home">
    //   <Stack.Screen name="home" />
    // </Stack>
    <Provider store={store}>
      <NavigationContainer independent={true}>
        {user ? <MyDrawer /> : <Login />}
        {/* <SignUp /> */}
      </NavigationContainer>
    </Provider>
  );
};

export default Layout;
