import React from "react";
import { View, AsyncStorage } from "react-native";
import { getTheme } from "../../../components/styles/colors";
import { ButtonCTA } from "../../../components";

export default class SettingsViewOne extends React.Component {
  _logout = () => {
    AsyncStorage.removeItem("userToken");
    this.props.navigation.navigate("Auth");
  };

  render() {
    const theme = getTheme();
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.backgroundColor,
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
