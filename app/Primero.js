// import { Redirect } from "expo-router";

// export default function Index() {
//   return <Redirect href="/home" />;
// }
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import { useSelector } from "react-redux";
import Drawer from "./components/MyDrawer";
import Header from "./components/Header";
import SignUp from "./SignUp";

const Primero = () => {
  const Stack = createNativeStackNavigator();
  const user = useSelector((state) => state.status); // Use useSelector to access the state
  console.log(user ? "verdadero" : "falso");
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   header: (props) => <Header {...props} />, // Use your custom header component
      // }}
      >
        {user ? (
          <Stack.Screen
            name="Drawer"
            component={Drawer}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Primero;
