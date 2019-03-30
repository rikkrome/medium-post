import { createStackNavigator } from "react-navigation";
import Login from "../../screens/Login";

const AuthStack = createStackNavigator({ Login: Login });

export { AuthStack };
