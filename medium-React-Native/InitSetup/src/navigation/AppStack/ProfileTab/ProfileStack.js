import { ProfileViewOne, ProfileViewTwo } from "../../../screens/Profile";

/**
 * @description - main nav for the Profile stack
 * @ProfileStack
 */
const ProfileStack = {
  ProfileViewOne: {
    screen: ProfileViewOne,
    navigationOptions: {
      title: "Profile",
      headerTintColor: "#000000"
    }
  },
  ProfileViewTwo: {
    screen: ProfileViewTwo,
    navigationOptions: {
      title: "ProfileViewTwo",
      headerTintColor: "#000000"
    }
  }
};

export { ProfileStack };
