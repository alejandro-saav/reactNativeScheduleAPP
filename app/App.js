import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import { useSelector } from "react-redux";
import Drawer from "./components/MyDrawer";
import SignUp from "./Screens/SignUp";
import { useEffect } from "react";
import { useDispatch } from "react-redux"; // Import the useDispatch hook
import { fetchLocalData } from "./Redux/auth/authActions";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const App = () => {
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();
  console.log(useSelector((state) => state));
  const status = useSelector((state) => state.auth.status); // Use useSelector to access the state
  const loading = useSelector((state) => state.auth.loading); // Use useSelector to access the state
  console.log(status);
  useEffect(() => {
    dispatch(fetchLocalData());
  }, []);
  //* Render a loading indicator while the data is being fetched
  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {status ? (
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
export default App;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
