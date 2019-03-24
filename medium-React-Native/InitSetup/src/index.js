import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { AppNavigator } from "./navigation";
import LoadingScreen from "./screens/LoadingScreen";

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}
