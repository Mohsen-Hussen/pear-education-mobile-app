import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreenFirst from "../screens/WelcomeScreenFirst";
import WelcomeScreensecond from "../screens/WelcomeScreenSecond";
import WelcomeScreenThird from "../screens/WelcomeScreenThird";
import DnsHomeScreen from "../screens/DnsHomeScreen";
import PearHomeScreen from "../screens/PearHomeScreen";
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
			<Stack.Screen name={routes.DNS_HOME_SCREEN} component={DnsHomeScreen} />
			<Stack.Screen name={routes.PEAR_HOME_SCREEN} component={PearHomeScreen} />
		</Stack.Navigator>
	);
}

export default WelcomeStackNav;
