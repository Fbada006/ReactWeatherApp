import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import {useGetWeather} from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

function App(): React.JSX.Element {
  const [loading, error, weather] = useGetWeather();

  if (weather != null && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs forecast={weather!} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={"large"} color={"blue"} />
      )}
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
