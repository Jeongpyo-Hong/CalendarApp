import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Library from "./pages/Library";
import MyPage from "./pages/MyPage";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === "HOME") {
              iconName = "home";
            } else if (route.name === "CALENDAR") {
              iconName = "calendar-alt";
            } else if (route.name === "LIBRARY") {
              iconName = "dumbbell";
            } else if (route.name === "MY PAGE") {
              iconName = "user-alt";
            }

            return <FontAwesome5 name={iconName} color={color} size={18} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="HOME" component={Home} />
        <Tab.Screen name="CALENDAR" component={Calendar} />
        <Tab.Screen name="LIBRARY" component={Library} />
        <Tab.Screen name="MY PAGE" component={MyPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
