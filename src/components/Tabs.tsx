import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import CurrentWeatherScreen from "../screens/CurrentWeatherScreen";
import UpcomingWeatherScreen from "../screens/UpcomingWeatherScreen";
import CityScreen from "../screens/CityScreen";
import {WeatherForecast} from "../hooks/useGetWeather";

const Tab = createBottomTabNavigator();

const Tabs = (forecast: WeatherForecast) => {
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
        {() => <CurrentWeatherScreen listItem={forecast.list[0]} />}
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
        {() => <UpcomingWeatherScreen data={forecast.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={"City"}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="home"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}>
        {() => <CityScreen city={forecast.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
