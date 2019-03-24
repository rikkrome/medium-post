import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import ViewOne from '../screens/ViewOne';
import ViewTwo from '../screens/ViewTwo';

const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
    ViewOne: ViewOne
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: Settings,
    ViewTwo: ViewTwo
  }
);

const RootBottomTabNavigator = createBottomTabNavigator(
  {
    Profile: ProfileStack,
    Settings: SettingsStack
  }
);



export default createAppContainer(RootBottomTabNavigator);