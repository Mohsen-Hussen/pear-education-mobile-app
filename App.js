import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./navigation/BottomTabsNavigator";
import WelcomeStackNav from "./navigation/WelcomeStackNav";
import AppSettings from "./config/AppSettings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { Alert } from "react-native";
import LoginScreen from "./screens/LoginScreen";

const Render = () => {
	const [isFirstTime, setIsFirstTime] = useState();

	useEffect(() => {
		AsyncStorage.getItem("isFirstTime").then((token) => {
			if (token === null) {
				AsyncStorage.setItem("isFirstTime", JSON.stringify(true));
				setIsFirstTime(true);
			} else {
				setIsFirstTime(JSON.parse(token));
			}
		});
	}, []);

	if (isFirstTime) {
		return (
			<NavigationContainer>
				<StatusBar style="auto" />
				<WelcomeStackNav />
			</NavigationContainer>
		);
	} else {
		return (
			<NavigationContainer>
				<StatusBar style="auto" />
				<BottomTabsNavigator />
			</NavigationContainer>
		);
	}
};
const App = () => {
<<<<<<< HEAD
	// return <LoginScreen />;
	return <Render />;
=======
	return <Render />;
	// <LoginScreen />
>>>>>>> 42c061fac12f503de9541682d68e4200ab5c6b2e
};

export default App;
