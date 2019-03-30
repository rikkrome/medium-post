import { ProfileStack } from "./ProfileStack";
import { SettingsStack } from "./SettingsStack";
import { createStackNavigator } from "react-navigation";
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

export { ProfileTab };
