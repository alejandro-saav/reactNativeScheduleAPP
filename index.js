import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import Primero from "./app/Primero";
import { Provider } from "react-redux";
import store from "./app/Redux/authRedux";
import { registerRootComponent } from "expo";

const index = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Primero />
    </Provider>
  );
};
export default index;
registerRootComponent(index);
