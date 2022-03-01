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
		paddingTop: StatusBar.currentHeight / 2,
		flex: 1,
		padding: 20,
		backgroundColor: colors.screenBackground,
	},
	view: {
		flex: 1,
	},
});

export default Screen;
