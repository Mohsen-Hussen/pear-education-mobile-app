import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Children } from "react";
import AppText from "../General/AppText";

export default function SignWith({ Text, children }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.box}>
				{children}
				<AppText>{Text}</AppText>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 20,
	},
	box: {
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: "9%",
		borderWidth: 0.2,
		borderRadius: 20,
		paddingVertical: 5,
		width: "90%",
	},
});
