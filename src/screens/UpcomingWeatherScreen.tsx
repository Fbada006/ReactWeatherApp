import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import UpcomingWeatherListItem from "../components/UpcomingWeatherListItem";
import {ListItem} from "../hooks/useGetWeather";

const UpcomingWeatherScreen = (weatherData: UpcomingWeatherData) => {
  const renderItem = (renderItem: any) => {
    const {
      dt_txt,
      main: {temp_min, temp_max},
      weather,
    } = renderItem.item as ListItem;

    return (
      <UpcomingWeatherListItem
        dt_txt={dt_txt}
        min={temp_min}
        max={temp_max}
        condition={weather[0].main}
      />
    );
  };

  const {container, image} = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/upcoming_background.jpg")}
        style={image}>
        <FlatList
          data={weatherData.data}
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

export interface UpcomingWeatherData {
  data: ListItem[];
}

export default UpcomingWeatherScreen;
