import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import navigationTheme from "./navigation/navigationTheme";
// import { navigationRef } from "./navigation/rootNavigation";

import PearHomeScreen from "./screens/PearHomeScreen";

const App = () => {
	return (
		<View style={styles.container}>
			<PearHomeScreen />
			<StatusBar style="auto" />
		</View>
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
