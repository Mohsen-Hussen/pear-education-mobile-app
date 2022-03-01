import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar } from "react-native";
import colors from "../../config/pearColors";

function Screen({ children, style }) {
	return (
		<SafeAreaView style={[styles.screen, style]}>
			<View style={[styles.view, style]}>{children}</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
<<<<<<< HEAD
		paddingTop: StatusBar.currentHeight / 2,
=======
>>>>>>> c24ea93612f9f8861b320f1d4610c6588a8d0e61
		flex: 1,
		backgroundColor: colors.screenBackground,
		paddingTop: StatusBar.currentHeight,
	},
	view: {
		flex: 1,
		paddingHorizontal: 20,
	},
});

export default Screen;
