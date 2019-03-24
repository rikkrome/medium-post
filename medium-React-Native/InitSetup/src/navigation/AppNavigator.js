import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import ViewOne from "../screens/ViewOne";
import ViewTwo from "../screens/ViewTwo";
import Login from "../screens/Login";
import LoadingScreen from "../screens/LoadingScreen";

/**
 * @description - main nav for the Login screen
 * @AuthStack
 */
const AuthStack = createStackNavigator({ Login: Login });

/**
 * @description - main nav for the Profile tab
 * @ProfileTabs
 */
const ProfileStack = createStackNavigator({
  Profile: Profile,
  ViewOne: ViewOne
});

/**
 * @description - main nav for the Settings tab
 * @SettingsTabs
 */
const SettingsStack = createStackNavigator({
  Settings: Settings,
  ViewTwo: ViewTwo
});

/**
 * @description - main app nav
 * @FullAppStack
 */
const AppStack = createBottomTabNavigator({
  Profile: ProfileStack,
  Settings: SettingsStack
});

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
