import { SettingsViewOne, SettingsViewTwo } from "../../screens/Settings";

/**
 * @description - main nav for the Settings stack
 * @SettingsStack
 */
const SettingsStack = {
  SettingsViewOne: {
    screen: SettingsViewOne,
    navigationOptions: {
      title: "SettingsViewOne",
      headerTintColor: "#000000"
    }
  },
  SettingsViewTwo: {
    screen: SettingsViewTwo,
    navigationOptions: {
      title: "SettingsViewTwo",
      headerTintColor: "#000000"
    }
  }
};

export { SettingsStack };
