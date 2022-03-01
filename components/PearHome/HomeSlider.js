import React from "react";
import {
	StyleSheet,
	View,
	FlatList,
	TouchableOpacity,
	Image,
} from "react-native";
import colors from "../../config/pearColors";
import AppText from "../General/AppText";

const HomeSlider = ({ data, title, width = 50 }) => {
	return (
		<View style={styles.sectioContainer}>
			<AppText size={22} color={colors.black} align="left" Weight="bold">
				{title}
			</AppText>
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
								<AppText size={17} color={colors.black} align="center">
									{item.title}
								</AppText>
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
});
