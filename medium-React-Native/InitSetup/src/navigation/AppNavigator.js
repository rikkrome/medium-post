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
 * @description - main nav for the Settings tab
 * @SettingsTabs
 */
const SettingsTab = createStackNavigator(
  {
    SettingsViewOne: SettingsViewOne,
    SettingsViewTwo: SettingsViewTwo
  },
  { initialRouteName: "SettingsViewOne" }
);

/**
 * @description - main nav for the Profile tab
 * @ProfileTabs
 */
const ProfileTab = createStackNavigator(
  {
    ProfileViewOne: ProfileViewOne,
    ProfileViewTwo: ProfileViewTwo
  },
  { initialRouteName: "ProfileViewOne" }
);

/**
 * @description - main app nav
 * @FullAppStack
 */
const AppStack = createBottomTabNavigator({
  Profile: ProfileTab,
  Settings: SettingsTab
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
