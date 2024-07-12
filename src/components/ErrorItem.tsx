import React from "react";
import {StyleSheet, View, Text} from "react-native";
import Feather from "react-native-vector-icons/Feather";

const ErrorItem = () => {
  const {container, errorMessage} = styles;
  return (
    <View style={container}>
      <Text style={errorMessage}>Sorry, something went wrong</Text>
      <Feather name={"frown"} size={100} color={"white"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessage: {
    fontSize: 30,
    color: "white",
    marginHorizontal: 12,
    textAlign: "center",
  },
});

export default ErrorItem;
