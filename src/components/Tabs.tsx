import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import CurrentWeatherScreen from "../screens/CurrentWeatherScreen";
import UpcomingWeatherScreen from "../screens/UpcomingWeatherScreen";
import CityScreen from "../screens/CityScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "lightblue",
        },
        headerStyle: {
          backgroundColor: "lightblue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "tomato",
        },
      }}>
      <Tab.Screen
        name={"Current"}
        component={CurrentWeatherScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="droplet"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Upcoming"}
        component={UpcomingWeatherScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="clock"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"City"}
        component={CityScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="home"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
