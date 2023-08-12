import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Groups from "./Groups";
import GroupsForm from "./GroupsForm";

const GroupsTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Groups" component={Groups} />
      <Tab.Screen name="AddGroup" component={GroupsForm} />
    </Tab.Navigator>
  );
};

export default GroupsTabNavigator;
