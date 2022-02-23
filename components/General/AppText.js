import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../config/pearColors";
function AppText({
	children,
	style,
	size = "18",
	align = "left",
<<<<<<< HEAD
	Weight = "normal",
=======
	color = "red",
>>>>>>> 9e211726db020a124d28f55ec17960135bb6119d
	...otherProps
}) {
	return (
		<Text
			style={[
				styles.text,
				{ textAlign: align },
				{ fontSize: parseInt(size) },
<<<<<<< HEAD
				{ fontWeight: Weight },
=======
				{ color: color},
>>>>>>> 9e211726db020a124d28f55ec17960135bb6119d
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
