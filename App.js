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
<<<<<<< HEAD
	return (
		// <NavigationContainer>
		// 	<WelcomeStackNav />
		// </NavigationContainer>

		<NavigationContainer>
			<StatusBar style="auto" />
			<BottomTabsNavigator />
		</NavigationContainer>
	);
=======
	return <Render></Render>;
>>>>>>> b12447359e2633f74ceca4df7a1d668469e9dcd3
};

export default App;
