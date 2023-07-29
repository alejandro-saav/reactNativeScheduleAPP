import { useFonts } from "expo-font";
import Header from "./components/Header";
import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./components/MyDrawer";
import { SafeAreaView } from "react-native";
import Login from "./Login";
import SignUp from "./SignUp";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const Layout = () => {
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
    <NavigationContainer independent={true}>
      {/* <MyDrawer /> */}
      {/* <Login /> */}
      <SignUp />
    </NavigationContainer>
  );
};

export default Layout;
