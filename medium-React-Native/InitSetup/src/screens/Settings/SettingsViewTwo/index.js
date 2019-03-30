import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../../components/styles";

export default class ViewTwo extends React.Component {
  static navigationOptions = {
    title: "SettingsViewTwo"
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.mainColors.lightBlue,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>SettingsViewTwo Screen</Text>
      </View>
    );
  }
}
