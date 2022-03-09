import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreenFirst from "../screens/WelcomeScreenFirst";
import WelcomeScreensecond from "../screens/WelcomeScreenSecond";
import WelcomeScreenThird from "../screens/WelcomeScreenThird";
import DnsHomeScreen from "../screens/DnsHomeScreen";
import PearHomeScreen from "../screens/PearHomeScreen";
import routes from "./routes";
import InstructorDetails from "../screens/InstructorDetails";
import RegisterFirst from "../screens/RegisterFirst";
import RegisterSecond from "../screens/RegisterSecond";
import LoginScreen from "../screens/LoginScreen";
import AppSettings from "../config/AppSettings";
import CoursesIntroScreen from "../screens/CoursesIntroScreen";
const Stack = createStackNavigator();

function StackNavigation() {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName={
				AppSettings.ISDNS ? routes.DNS_HOME_SCREEN : routes.PEAR_HOME_SCREEN
			}
		>
			{/* Homes */}
			<Stack.Screen name={routes.DNS_HOME_SCREEN} component={DnsHomeScreen} />
			<Stack.Screen name={routes.PEAR_HOME_SCREEN} component={PearHomeScreen} />
			<Stack.Screen
				name={routes.COURSE_DETAILS}
				component={CoursesIntroScreen}
			/>
			{/* Signin & Signup */}
			{/* <Stack.Screen
				name={routes.REGISTER_FIRST_SCREEN}
				component={RegisterFirst}
			/>
			<Stack.Screen
				name={routes.REGISTER_SECOND_SCREEN}
				component={RegisterSecond}
			/> */}
			{/* <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} /> */}
			<Stack.Screen
				name={routes.INSTRUCTOR_DETAILS}
				component={InstructorDetails}
			/>
		</Stack.Navigator>
	);
}

export default StackNavigation;
