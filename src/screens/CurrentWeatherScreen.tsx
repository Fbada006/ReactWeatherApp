import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import RowText from "../components/RowText";
import {getWeatherCondition} from "../utilities/WeatherType";
import {ListItem, Main} from "../hooks/useGetWeather";

const CurrentWeatherScreen = ({item}: any) => {
  const listItem = item as ListItem
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;

  const {main, weather} = listItem;

  const weatherCondition = weather[0]?.main;
  const {temp, feels_like, temp_max, temp_min}: Main = main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        {
          backgroundColor:
            getWeatherCondition(weatherCondition)?.backgroundColor,
        },
      ]}>
      <View style={container}>
        <Feather
          name={
            getWeatherCondition(weatherCondition)
              ? getWeatherCondition(weatherCondition)?.icon!
              : "sun"
          }
          size={100}
          color={"white"}
        />

        <Text style={tempStyles}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>

        <RowText
          messageOne={`High: ${temp_max}°`}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>

      <RowText
        messageOne={weather[0]?.description}
        messageTwo={
          getWeatherCondition(weatherCondition)
            ? getWeatherCondition(weatherCondition)?.message!
            : ""
        }
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempStyles: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
});

export default CurrentWeatherScreen;
