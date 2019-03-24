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

// AuthStack
const AuthStack = createStackNavigator({ Login: Login });

// Profile Tabs
const ProfileStack = createStackNavigator({
  Profile: Profile,
  ViewOne: ViewOne
});

// Settings Tabs
const SettingsStack = createStackNavigator({
  Settings: Settings,
  ViewTwo: ViewTwo
});

// full AppStack
const AppStack = createBottomTabNavigator({
  Profile: ProfileStack,
  Settings: SettingsStack
});

/***
 * This allow us to switch between nav stacks.
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
