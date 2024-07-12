import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import {useGetWeather} from "./src/hooks/useGetWeather";

function App(): React.JSX.Element {
  const [loading, error, weather] = useGetWeather();
  console.log(loading, weather, error);

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
