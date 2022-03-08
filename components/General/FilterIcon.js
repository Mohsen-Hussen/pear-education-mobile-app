import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../../config/pearColors";

const FilterIcon = ({ head, headSize, FilterIconSize, onPress }) => {
	return (
		<View style={styles.filterContainer}>
			<AppText size={headSize} Weight="bold" color={colors.gray}>
				{head}
			</AppText>
			<TouchableOpacity onPress={onPress}>
				<View style={styles.filterIconStyle}>
					<FontAwesome5
						name="filter"
						size={FilterIconSize}
						color={colors.white}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default FilterIcon;

const styles = StyleSheet.create({
	filterContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 10,
	},
	filterIconStyle: {
		backgroundColor: colors.primary,
		padding: 10,
		borderRadius: 8,
	},
});
