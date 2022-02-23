import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../../config/pearColors";

function GeneralButton({ title, onPress, color = "primary", width = "85%" }) {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[color], width: width }]}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
		width: "100%",
		marginVertical: 15,
	},
	text: {
		color: colors.white,
		fontSize: 18,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});

export default GeneralButton;
