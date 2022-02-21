import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import navigationTheme from "./navigation/navigationTheme";
// import { navigationRef } from "./navigation/rootNavigation";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./navigation/BottomTabsNavigator";

import PearHomeScreen from "./screens/PearHomeScreen";
import WelcomeStackNav from "./navigation/WelcomeStackNav";

const App = () => {
	return (
		<NavigationContainer>
			<WelcomeStackNav />
		</NavigationContainer>

		// <NavigationContainer>
		// 	<StatusBar style="auto" />
		// 	<BottomTabsNavigator />
		// </NavigationContainer>

		// <View style={styles.container}>
		// 	<BottomTabsNavigator></BottomTabsNavigator>
		// 	<PearHomeScreen />
		// </View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
	},
});

export default App;
