import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import {ActivityIndicator, Button, StyleSheet, View} from "react-native";
import Geolocation, {
  GeolocationResponse,
} from "@react-native-community/geolocation";
import {SafeAreaView} from "react-native-safe-area-context";

function App(): React.JSX.Element {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<GeolocationResponse | null>(null);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    Geolocation.requestAuthorization(
      () => {
        console.log("There is authorization here");
      },
      error => {
        setError("Permission to access location was denied");
        return;
      },
    );

    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
      },
      error => {
        setError(`Error getting the current location ${error.message}`);
      },
    );
  }, []);

  if (location != null) {
    const {latitude, longitude} = location.coords;
    console.log(
      `Position obtained: Latitude is ${latitude} while the longitude is ${longitude}`,
    );
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );
  }
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
