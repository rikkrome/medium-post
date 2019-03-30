import { AnalyticsViewOne, AnalyticsViewTwo } from "../../../screens/Analytics";

/**
 * @description - main nav for the Analytics stack
 * @AnalyticsStack
 */
const AnalyticsStack = {
  AnalyticsViewOne: {
    screen: AnalyticsViewOne,
    navigationOptions: {
      title: "Analytics",
      headerTintColor: "#000000"
    }
  },
  AnalyticsViewTwo: {
    screen: AnalyticsViewTwo,
    navigationOptions: {
      title: "AnalyticsViewTwo",
      headerTintColor: "#000000"
    }
  }
};

export { AnalyticsStack };
