import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../../components/styles";

export default class AnalyticsViewTwo extends React.Component {
  static navigationOptions = {
    title: "AnalyticsViewTwo"
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
        <Text>AnalyticsViewTwo Screen</Text>
      </View>
    );
  }
}
