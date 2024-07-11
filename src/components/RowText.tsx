import {View} from "react-native";
import {Text} from "react-native-elements";

type RowTextProps = {
  messageOne: String;
  messageTwo: String;
  containerStyles: {};
  messageOneStyles: {};
  messageTwoStyles: {};
};

const RowText = ({
  messageOne,
  messageTwo,
  containerStyles,
  messageOneStyles,
  messageTwoStyles,
}: RowTextProps) => {
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne} </Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
