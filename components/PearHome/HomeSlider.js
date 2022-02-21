import React from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Image,
	Platform,
} from "react-native";
import colors from "../../config/pearColors";

const HomeSlider = ({ data, title, width = 50 }) => {
	return (
		<View style={styles.sectioContainer}>
			<Text style={styles.text}>{title}</Text>
			<View style={styles.sectionAlign}>
				<FlatList
					showsHorizontalScrollIndicator={false}
					horizontal
					data={data}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<TouchableOpacity>
							<View style={styles.item}>
								<Image
									source={item.image}
									style={[styles.image, { width: width }]}
								/>
								<Text style={styles.title}>{item.title}</Text>
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>
		</View>
	);
};

export default HomeSlider;

const styles = StyleSheet.create({
	sectioContainer: {
		width: "100%",
		padding: Platform.OS === "android" ? 10 : 20,
		marginBottom: 15,
	},
	text: {
		width: "100%",
		marginBottom: 20,
		fontSize: 20,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		fontWeight: "600",
		color: colors.gray,
	},
	sectionAlign: {
		justifyContent: "center",
		alignItems: "center",
	},
	item: {
		marginHorizontal: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	image: { marginBottom: 5, height: 45 },
	title: {
		fontSize: 17,
		color: colors.medium,
		fontWeight: "500",
	},
});
