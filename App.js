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
import RegisterFirst from "./screens/RegisterFirst";
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
	return <RegisterFirst />;
	// return <Render />;
	// <LoginScreen />
};

export default App;
