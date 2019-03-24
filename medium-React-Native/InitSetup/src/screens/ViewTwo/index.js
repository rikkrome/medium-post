import React from "react";
import { View, Text } from "react-native";
import {colors} from '../../components/styles'

export default class ViewTwo extends React.Component {
  static navigationOptions = {
    title: 'ViewTwo',
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.mainColors.midBlue, alignItems: "center", justifyContent: "center"}}>
        <Text>ViewTwo Screen</Text>
      </View>
    );
  }
}