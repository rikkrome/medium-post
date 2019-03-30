import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../components/styles";
import { ButtonCTA, IconBtn } from "../../../components";

export default class ProfileViewOne extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "ProfileViewOne",
      headerRight: (
        <IconBtn
          source={require("../../../assets/icons/settings.png")}
          onPress={() => navigation.navigate("SettingsViewOne")}
        />
      )
    };
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
