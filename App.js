import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./navigation/BottomTabsNavigator";
import WelcomeStackNav from "./navigation/WelcomeStackNav";

const Render = () => {
	const [loging, setLoging] = useState(false);
	if (loging) {
		return (
			<NavigationContainer>
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
	return <Render />;
};

export default App;
