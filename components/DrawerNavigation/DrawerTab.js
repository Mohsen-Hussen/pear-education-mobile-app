import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "../General/AppText";
import pearColors from "../../config/pearColors";
const DrawerTab = ({ onPress, title, children }) => {
	return (
		<TouchableOpacity
			style={{
				flexDirection: "row",
				width: "100%",
				height: 50,
				// marginVertical: 5,
			}}
			onPress={onPress}
		>
			<View
				style={{
					width: 50,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{children}
			</View>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
				}}
			>
				<AppText>{title}</AppText>
			</View>
		</TouchableOpacity>
	);
};

export default DrawerTab;

const styles = StyleSheet.create({});
