import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import App from "./app/App";
import { Provider } from "react-redux";
import store from "./app/Redux/authRedux";
import { registerRootComponent } from "expo";
import { PaperProvider } from "react-native-paper";

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
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  );
};
export default index;
registerRootComponent(index);
