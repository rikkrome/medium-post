import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import { AnalyticsStack } from "./AnalyticsStack";
import { colors } from "../../../components/styles";
/**
 * @description - main nav for the Analytics tab
 * @AnalyticsTab
 */
const TopTabNav = createMaterialTopTabNavigator(
  {
    ...AnalyticsStack
  },
  {
    initialRouteName: "AnalyticsViewOne",
    tabBarOptions: {
      labelStyle: {
        // Style object for the tab label.
        fontSize: 12,
        color: colors.mainColors.darkBlue
      },
      tabStyle: {
        // Style object for the tab.
        flex: 1
      },
      indicatorStyle: {
        // line at the bottom of the tab
        backgroundColor: colors.mainColors.darkBlue
      },
      style: {
        // Style object for the tab bar.
        backgroundColor: colors.mainColors.white
      }
    }
  }
);

const AnalyticsTab = createStackNavigator(
  {
    Analytics: TopTabNav
  },
  {
    initialRouteName: "Analytics",
    defaultNavigationOptions: ({ navigation }) => ({
      title: "Analytics",
      headerTintColor: colors.mainColors.darkBlue
    })
  }
);

export { AnalyticsTab };
