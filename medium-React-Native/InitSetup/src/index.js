import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { BottomTabNavigator } from "./navigation";
import LoadingScreen from "./screens/LoadingScreen";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: true
    };
  }

  renderContent() {
    switch (this.state.Loading) {
      case true:
        return <LoadingScreen />;
      case false:
        return <BottomTabNavigator />;
      default:
        return (
          <View style={styles.spinnerStyle}>
            <ActivityIndicator size="large" />
          </View>
        );
    }
  }

  render() {
    return this.renderContent();
  }
}
