import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import UpcomingWeatherListItem from "../components/UpcomingWeatherListItem";

const UpcomingWeatherScreen = ({weatherData}: any) => {
  console.log(weatherData)
  const renderItem = ({item}: any) => (
    <UpcomingWeatherListItem
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
    />
  );

  const {container, image} = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/upcoming_background.jpg")}
        style={image}>

        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "goldenrod",
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeatherScreen;
