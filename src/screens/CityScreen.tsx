import React from "react";
import {
  View,
  ImageBackground,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import IconText from "../components/IconText";

const CityScreen = () => {
  const {
    container,
    imageLayout,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationtext,
    riseSetWrapper,
    riseSetText,
    rowLayout,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city_background.jpg")}
        style={imageLayout}>
        <Text style={[cityName, cityText]}>Nairobi</Text>
        <Text style={[countryName, cityText]}>Kenya</Text>

        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={"50,000"}
            bodyTextStyles={populationtext}
          />
        </View>

        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={"10:46:58am"}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={"17:45:45pm"}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationtext: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CityScreen;
