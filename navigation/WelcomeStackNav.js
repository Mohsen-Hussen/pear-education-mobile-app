import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreenFirst from "../screens/WelcomeScreenFirst";
import WelcomeScreensecond from "../screens/WelcomeScreenSecond";
import WelcomeScreenThird from "../screens/WelcomeScreenThird";
import routes from "./routes";
const Stack = createStackNavigator();

function WelcomeStackNav() {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName={routes.WELCOME_FIRST_SCREEN}
		>
			<Stack.Screen
				name={routes.WELCOME_FIRST_SCREEN}
				component={WelcomeScreenFirst}
			/>
			<Stack.Screen
				name={routes.WELCOME_SECOND_SCREEN}
				component={WelcomeScreensecond}
			/>
			<Stack.Screen
				name={routes.WELCOME_THIRD_SCREEN}
				component={WelcomeScreenThird}
			/>
		</Stack.Navigator>
	);
}

export default WelcomeStackNav;
