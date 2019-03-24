import React from "react";
import { View, Button, AsyncStorage } from "react-native";
import {colors} from '../../components/styles'

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    return (
      <View style={{ flex: 1}}>
      <View style={{ flex: 1, backgroundColor: colors.mainColors.darkBlue, alignItems: "center", justifyContent: "center"}}>
          <Button 
           title="Login"
           onPress={ async () => {
              await AsyncStorage.setItem('AUTHTOKEN', '1234567890');
           }}
          />
        </View>
      </View>
    );
  }
}
