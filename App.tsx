import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import {useGetWeather} from "./src/hooks/useGetWeather";

function App(): React.JSX.Element {
  const [loading, error, weather] = useGetWeather();

  if (weather) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"blue"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});
export default App;
