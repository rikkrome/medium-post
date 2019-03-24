import React from "react";
import { View } from "react-native";
import { colors } from "../../components/styles";
import { ButtonCTA } from "../../components";

export default class Profile extends React.Component {
  static navigationOptions = {
    title: "Profile"
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
            title="Go to ViewOne"
            onPress={() => this.props.navigation.navigate("ViewOne")}
          />
          <ButtonCTA
            title="Go to Settings"
            onPress={() => this.props.navigation.navigate("Settings")}
          />
          <ButtonCTA
            title="Go to ViewTwo"
            onPress={() => this.props.navigation.navigate("ViewTwo")}
          />
        </View>
      </View>
    );
  }
}
