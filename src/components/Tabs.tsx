import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import CurrentWeatherScreen from "../screens/CurrentWeatherScreen";
import UpcomingWeatherScreen from "../screens/UpcomingWeatherScreen";
import CityScreen from "../screens/CityScreen";

const Tab = createBottomTabNavigator();

const Tabs = ({forecast}: any) => {
  //console.log(forecast.list);
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
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="droplet"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}>
        {() => <CurrentWeatherScreen weatherData={forecast.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={"Upcoming"}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="clock"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}>
        {() => <UpcomingWeatherScreen weatherData={forecast.list} />}
      </Tab.Screen>
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
