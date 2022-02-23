import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../config/pearColors";
function AppText({
	children,
	style,
	size = "18",
	align = "left",
	color = "red",
	Weight = "normal",
	...otherProps
}) {
	return (
		<Text
			style={[
				styles.text,
				{ textAlign: align },
				{ fontSize: parseInt(size) },
				{ fontWeight: Weight },
				{ color: color },
			]}
			{...otherProps}
		>
			{children}
		</Text>
	);
}
const styles = StyleSheet.create({
	text: {
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		marginVertical: 10,
	},
});
export default AppText;
