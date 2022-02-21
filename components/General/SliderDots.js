import { StyleSheet, Text, View } from "react-native";
import React from "react";
import pearColors from "../../config/pearColors";

const SliderDots = ({
	FirstWidth = 15,
	FistColor = pearColors.primary,
	secondWidth = 15,
	secondColor = pearColors.primary,

	thirdWidth = 15,
	thirdColor = pearColors.primary,
}) => {
	return (
		<View style={{ flexDirection: "row", marginVertical: 20 }}>
			<View
				style={[
					styles.box,
					{ width: parseInt(FirstWidth), backgroundColor: FistColor },
				]}
			/>
			<View
				style={[
					styles.box,
					{ width: parseInt(secondWidth), backgroundColor: secondColor },
				]}
			/>
			<View
				style={[
					styles.box,
					{ width: parseInt(thirdWidth), backgroundColor: thirdColor },
				]}
			/>
		</View>
	);
};

export default SliderDots;

const styles = StyleSheet.create({
	box: {
		height: 15,
		borderRadius: 50,
		marginHorizontal: 5,
	},
});
