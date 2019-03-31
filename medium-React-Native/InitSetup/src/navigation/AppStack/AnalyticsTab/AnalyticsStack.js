import { AnalyticsViewOne, AnalyticsViewTwo } from "../../../screens/Analytics";

/**
 * @description - main nav for the Analytics stack
 * @AnalyticsStack
 */
const AnalyticsStack = {
  AnalyticsViewOne: {
    screen: AnalyticsViewOne,
    path: "Analytics/:AnalyticsViewOne",
    navigationOptions: {
      title: "Stats",
      headerTintColor: "#000000"
    }
  },
  AnalyticsViewTwo: {
    screen: AnalyticsViewTwo,
    path: "Analytics/:AnalyticsViewTwo",
    navigationOptions: {
      title: "Activity",
      headerTintColor: "#000000"
    }
  }
};

export { AnalyticsStack };
