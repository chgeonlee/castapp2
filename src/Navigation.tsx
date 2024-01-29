import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screen/Home";
import Search from "./screen/Search";
import lib from "./lib";
import Pin from "./screen/Pin";
import Stat from "./screen/Stat";
import { DeviceEventEmitter, View } from "react-native";
import Mark from "./screen/Pin";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ComponentEventWrapper = (name: string, component: any) => {
  return component;
};

export const BottomNavigation = () => {
  const iconSize = 23;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: lib.palette.BLACK,
        tabBarInactiveTintColor: lib.palette.GREY,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return lib.icon.home(iconSize, color);
          },
        }}
        listeners={{
          tabPress: (e) => {
            DeviceEventEmitter.emit("homeTabPressed");
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return lib.icon.search(iconSize, color);
          },
        }}
      />
      <Tab.Screen
        name="Mark"
        component={Mark}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return lib.icon.marker(iconSize, color);
          },
        }}
      />
      <Tab.Screen
        name="Rank"
        component={Stat}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return lib.icon.rank(iconSize, color);
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="MainTab"
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
