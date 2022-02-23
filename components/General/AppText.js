import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../config/pearColors";
function AppText({
	children,
	style,
	size = "18",
	align = "left",
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
			]}
			{...otherProps}
		>
			{children}
		</Text>
	);
}
const styles = StyleSheet.create({
	text: {
		color: colors.dark,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		marginVertical: 10,
	},
});
export default AppText;
