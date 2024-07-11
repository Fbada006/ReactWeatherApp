import React from "react";
import {StyleSheet, View, Text} from "react-native";
import Feather from "react-native-vector-icons/Feather";

type IconProps = {
  iconName: string;
  iconColor: string;
  bodyText: string;
  bodyTextStyles: {};
};

const IconText = ({
  iconName,
  iconColor,
  bodyText,
  bodyTextStyles,
}: IconProps) => {
  const {container, textTheme} = styles;

  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textTheme: {
    fontWeight: "bold",
  },
});

export default IconText;
