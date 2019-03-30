import React from "react";
import { View, AsyncStorage } from "react-native";
import { colors } from "../../../components/styles";
import { ButtonCTA } from "../../../components";

export default class SettingsViewOne extends React.Component {
  static navigationOptions = {
    title: "SettingsViewOne"
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
            title="Go to SettingsViewTwo"
            onPress={() => this.props.navigation.navigate("SettingsViewTwo")}
          />
          <ButtonCTA title="Logout" onPress={this._logout} />
        </View>
      </View>
    );
  }
}
