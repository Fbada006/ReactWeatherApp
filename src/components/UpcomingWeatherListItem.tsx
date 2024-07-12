import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import {getWeatherCondition} from "../utilities/WeatherType";
import moment from "moment";

type ItemProps = {dt_txt: string; min: number; max: number; condition: string};

const UpcomingWeatherListItem = ({dt_txt, min, max, condition}: ItemProps) => {
  const {item, date, temp, dateTextWrapper} = styles;
  return (
    <View style={item}>
      <Feather
        name={
          getWeatherCondition(condition)
            ? getWeatherCondition(condition)?.icon!
            : "sun"
        }
        size={50}
        color={"white"}
      />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
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
    backgroundColor: "indianred",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  dateTextWrapper: {
    flexDirection: "column",
  },
});

export default UpcomingWeatherListItem;
