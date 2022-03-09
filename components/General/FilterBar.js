import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Platform,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../config/pearColors";
import routes from "../../navigation/routes";

const FilterBar = ({
	placeholder,
	placeholderColor,
	searchIconName,
	searchIconsize,
	searchIconColor,
	filterIconName,
	filterIconSize,
	filterIconColor,
	navigation,
}) => {
	const [text, setText] = useState("");
	return (
		<View style={styles.wrapperContainer}>
			<View style={styles.searchInputContainer}>
				<AntDesign
					name={searchIconName}
					size={searchIconsize}
					style={{ color: colors[searchIconColor] }}
				/>
				<TextInput
					placeholder={placeholder}
					onChangeText={(text) => {
						setText(text);
					}}
					value={text}
					placeholderTextColor={colors[placeholderColor]}
					style={styles.input}
				/>
			</View>
			<TouchableOpacity
				onPress={() =>
					navigation.navigate(routes.COURSES_SCREEN, {
						SearchText: text,
					})
				}
			>
				<View style={styles.filterIconStyle}>
					<AntDesign
						name={filterIconName}
						size={filterIconSize}
						style={{ color: colors[filterIconColor] }}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default FilterBar;

const styles = StyleSheet.create({
	text: {
		width: "100%",
		marginBottom: 20,
		fontSize: 20,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		fontWeight: "600",
		color: colors.gray,
	},
	wrapperContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	searchInputContainer: {
		flexDirection: "row",
		width: "80%",
		padding: 5,
		borderRadius: 8,
		backgroundColor: colors.white,
	},
	input: {
		flex: 1,
		padding: 5,
		marginHorizontal: 10,
		fontSize: 22,
	},
	filterIconStyle: {
		backgroundColor: colors.primary,
		padding: 10,
		borderRadius: 8,
	},
});
