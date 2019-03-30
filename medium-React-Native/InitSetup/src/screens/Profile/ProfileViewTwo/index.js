import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../../components/styles";

export default class ProfileViewTwo extends React.Component {
  static navigationOptions = {
    title: "ProfileViewTwo"
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.mainColors.lightBlue,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text>ProfileViewTwo Screen</Text>
        </View>
      </View>
    );
  }
}
