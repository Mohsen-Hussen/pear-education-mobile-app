import React from "react";
import { StyleSheet, Text } from "react-native";
function AppText({
	children,
	style,
	size = "18",
	align = "left",
	color = "black",
	Weight = "normal",
	marginVertical = 10,
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
				{ marginVertical: marginVertical },
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
	},
});
export default AppText;
