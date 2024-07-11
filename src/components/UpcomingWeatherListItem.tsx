import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Feather from "react-native-vector-icons/Feather";

type ItemProps = {dt_txt: string; min: string; max: string; condition: String};

const UpcomingWeatherListItem = ({dt_txt, min, max, condition}: ItemProps) => {
  const {item, date, temp} = styles;
  return (
    <View style={item}>
      <Feather name="sun" size={50} color={"white"}></Feather>
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{max}</Text>
      <Text style={temp}>{min}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "pink",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
});

export default UpcomingWeatherListItem;
