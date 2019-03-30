import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { colors } from "../../../components/styles";
import { ButtonCTA } from "../../../components";

export default class ProfileViewOne extends React.Component {
  static navigationOptions = {
    title: "ProfileViewOne"
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
          <Text>ProfileViewOne Screen</Text>
          <ButtonCTA
            title="Go to ProfileViewTwo"
            onPress={() => this.props.navigation.navigate("ProfileViewTwo")}
          />
          <ButtonCTA
            title="Go to Settings"
            onPress={() => this.props.navigation.navigate("Settings")}
          />
          <ButtonCTA
            title="Go to SettingsViewTwo"
            onPress={() => this.props.navigation.navigate("SettingsViewTwo")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});
