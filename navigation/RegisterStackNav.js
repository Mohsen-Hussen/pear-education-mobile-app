import { createStackNavigator } from "@react-navigation/stack";
import RegisterFirst from "../screens/RegisterFirst";
import RegisterSecond from "../screens/RegisterSecond";
import loginScreen from "../screens/LoginScreen";
import DnsHomeScreen from "../screens/DnsHomeScreen";
import PearHomeScreen from "../screens/PearHomeScreen";
import routes from "./routes";
import BottomTabsNavigator from "./BottomTabsNavigator";
const Stack = createStackNavigator();

function RegisterStackNav() {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName={routes.REGISTER_FIRST_SCREEN}
		>
			<Stack.Screen
				name={routes.REGISTER_FIRST_SCREEN}
				component={RegisterFirst}
			/>
			<Stack.Screen
				name={routes.REGISTER_SECOND_SCREEN}
				component={RegisterSecond}
			/>
			{/* <Stack.Screen name={routes.LOGIN_SCREEN} component={loginScreen} /> */}
			{/* <Stack.Screen
				name={routes.BOTTOM_TAPS_NAVIGATOR}
				component={BottomTabsNavigator}
			/> */}
			{/* <Stack.Screen name={routes.DNS_HOME_SCREEN} component={DnsHomeScreen} />
			<Stack.Screen name={routes.PEAR_HOME_SCREEN} component={PearHomeScreen} /> */}
		</Stack.Navigator>
	);
}

export default RegisterStackNav;
