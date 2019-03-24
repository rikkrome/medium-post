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
const AuthStack = createStackNavigator({ Login: Login });

const ProfileStack = createStackNavigator({
  Profile: Profile,
  ViewOne: ViewOne
});

const SettingsStack = createStackNavigator({
  Settings: Settings,
  ViewTwo: ViewTwo
});

const AppStack = createBottomTabNavigator({
  Profile: ProfileStack,
  Settings: SettingsStack
});

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
