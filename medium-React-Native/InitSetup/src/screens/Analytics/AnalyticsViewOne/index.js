import React from "react";
import { View, AsyncStorage } from "react-native";
import { colors } from "../../../components/styles";
import { ButtonCTA } from "../../../components";

export default class AnalyticsViewOne extends React.Component {
  static navigationOptions = {
    title: "AnalyticsViewOne"
  };

  _logout = () => {
    AsyncStorage.removeItem("userToken");
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.mainColors.white,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ButtonCTA
            title="Go to AnalyticsViewOne"
            onPress={() => this.props.navigation.navigate("AnalyticsViewTwo")}
          />
        </View>
      </View>
    );
  }
}
