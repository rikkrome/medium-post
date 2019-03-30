import { createStackNavigator } from "react-navigation";
import { AnalyticsStack } from "./AnalyticsStack";
/**
 * @description - main nav for the Analytics tab
 * @AnalyticsTab
 */
const AnalyticsTab = createStackNavigator(
  {
    ...AnalyticsStack
  },
  { initialRouteName: "AnalyticsViewOne" }
);

export { AnalyticsTab };
