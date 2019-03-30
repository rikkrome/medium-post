import React from "react";
import { Image } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { ProfileViewOne, ProfileViewTwo } from "../screens/Profile";
import { SettingsViewOne, SettingsViewTwo } from "../screens/Settings";
import Login from "../screens/Login";
import LoadingScreen from "../screens/LoadingScreen";

/**
 * @description - main nav for the Login screen
 * @AuthStack
 */
const AuthStack = createStackNavigator({ Login: Login });

/**
 * @description - main nav for the Settings stack
 * @SettingsStack
 */
const SettingsStack = {
  SettingsViewOne: SettingsViewOne,
  SettingsViewTwo: SettingsViewTwo
};

/**
 * @description - main nav for the Profile stack
 * @ProfileStack
 */
const ProfileStack = {
  ProfileViewOne: ProfileViewOne,
  ProfileViewTwo: ProfileViewTwo
};

/**
 * @description - main nav for the Profile tab
 * @ProfileTabs
 */
const ProfileTab = createStackNavigator(
  {
    ...ProfileStack,
    ...SettingsStack
  },
  { initialRouteName: "ProfileViewOne" }
);

/**
 * @description - main app nav
 * @FullAppStack
 */
const AppStack = createBottomTabNavigator(
  {
    Profile: ProfileTab
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Profile") {
          iconName = focused
            ? require("../assets/icons/user.png")
            : require("../assets/icons/user.png");
        } else if (routeName === "Settings") {
          iconName = focused
            ? require("../assets/icons/settings.png")
            : require("../assets/icons/settings.png");
        }
        // You can return any component that you like here!
        return (
          <Image
            source={iconName}
            style={[{ width: 24, height: 24 }, { tintColor: tintColor }]}
          />
        );
      }
    })
  }
);

/***
 * @description - This allow us to switch between nav stacks.
 * @AuthLoading - loading screen will load the init data needed.
 * @App - main app stack
 * @Auth - login stack
 * */
const rootStack = createSwitchNavigator(
  {
    AuthLoading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default createAppContainer(rootStack);
