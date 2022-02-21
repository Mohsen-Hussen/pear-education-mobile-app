import React from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Image,
	Platform,
	ScrollView,
} from "react-native";
import colors from "../../config/pearColors";

const HomeFlatList = ({ data, title }) => {
	return (
		<>
			<Text style={styles.text}>{title}</Text>
			<View style={styles.sectioContainer}>
				<FlatList
					data={data}
					keyExtractor={(item) => item.id.toString()}
					numColumns={4}
					renderItem={({ item }) => (
						<TouchableOpacity style={styles.sectionAlign}>
							<View style={styles.cardContainer}>
								<Image source={item.image} />
								<Text style={styles.title}>{item.title}</Text>
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>
		</>
	);
};

export default HomeFlatList;

const styles = StyleSheet.create({
	text: {
		width: "100%",
		marginBottom: 20,
		fontSize: 20,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		fontWeight: "600",
		color: colors.gray,
		paddingHorizontal: Platform.OS === "android" ? 10 : 20,
	},
	sectioContainer: {
		width: "100%",
		padding: Platform.OS === "android" ? 10 : 20,
		marginBottom: 15,
	},
	sectionAlign: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	cardContainer: {
		marginVertical: 10,
	},
	title: {
		fontSize: 17,
		color: colors.medium,
		fontWeight: "500",
	},
});
