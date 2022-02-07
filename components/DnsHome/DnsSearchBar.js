import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Platform,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import colors from "../../config/pearColors";

const DnsSearchBar = ({ header, placeholder }) => {
	const [text, setText] = useState("");
	return (
		<>
			<Text style={styles.text}>{header}</Text>
			<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
				<View style={{ flexDirection: "row", width: "80%" }}>
					<AntDesign
						name="search1"
						size={37}
						style={{ color: colors.primary }}
					/>
					<TextInput
						placeholder={placeholder}
						onChangeText={(text) => {
							setText(text);
						}}
						value={text}
						placeholderTextColor={colors.medium}
						style={styles.input}
					/>
				</View>
				<TouchableOpacity onPress={() => console.log(text)}>
					<MaterialCommunityIcons
						name="filter"
						size={37}
						style={{ color: colors.primary }}
					/>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default DnsSearchBar;

const styles = StyleSheet.create({
	text: {
		width: "100%",
		marginBottom: 20,
		fontSize: 20,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		fontWeight: "600",
		color: colors.gray,
	},
	input: {
		width: "100%",
		padding: 5,
		marginHorizontal: 5,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: colors.primary,
		fontSize: 19,
	},
});
