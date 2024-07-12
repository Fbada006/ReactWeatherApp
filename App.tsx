import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import Geolocation, {
  GeolocationResponse,
} from "@react-native-community/geolocation";
import {WEATHER_API_KEY} from "@env";

function App(): React.JSX.Element {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String | null>(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState<number>(0);
  const [lon, setLon] = useState<number>(0);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`,
      );
      const data = await res.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      setError(`Could not fetch weather`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Geolocation.requestAuthorization(
      () => {},
      error => {
        setError("Permission to access location was denied");
        return;
      },
    );

    Geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      error => {
        setError(`Error getting the current location ${error.message}`);
      },
    );

    (async () => {
      await fetchWeatherData();
    })();
  }, [lat, lon]);

  // if (loading) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator size={"large"} color={"blue"} />
  //     </View>
  //   );
  // }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});
export default App;
