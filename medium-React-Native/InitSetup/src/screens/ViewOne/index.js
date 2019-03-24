import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../components/styles";

export default class ViewOne extends React.Component {
  static navigationOptions = {
    title: "ViewOne"
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
          <Text>ViewOne Screen</Text>
        </View>
      </View>
    );
  }
}
