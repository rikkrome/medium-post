import React from "react";
import { Image } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import Login from "../screens/Login";
import LoadingScreen from "../screens/LoadingScreen";
import { ProfileTab } from "./ProfileTab/index";
import { AnalyticsTab } from "./AnalyticsTab/index";

/**
 * @description - main nav for the Login screen
 * @AuthStack
 */
const AuthStack = createStackNavigator({ Login: Login });

/**
 * @description - main app nav
 * @FullAppStack
 */
const AppStack = createBottomTabNavigator(
  {
    Profile: ProfileTab,
    Analytics: AnalyticsTab
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Profile") {
          iconName = require("../assets/icons/user.png");
        } else if (routeName === "Analytics") {
          iconName = require("../assets/icons/stats.png");
        }
        // You can return any component that you like here!
        return (
          <Image
            source={iconName}
            style={[{ width: 24, height: 24 }, { tintColor: tintColor }]}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
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
