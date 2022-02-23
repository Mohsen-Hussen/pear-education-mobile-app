import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import pearColors from "../config/pearColors";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
	return (
		<View style={[styles.container, { width }]}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={pearColors.medium}
					style={styles.icon}
				/>
			)}
			<TextInput
				placeholderTextColor={pearColors.medium}
				style={pearColors.text}
				{...otherProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: pearColors.light,
		borderRadius: 25,
		flexDirection: "row",
		padding: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
});

export default AppTextInput;
