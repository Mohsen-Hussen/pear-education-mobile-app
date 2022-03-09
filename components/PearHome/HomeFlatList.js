import React from "react";
import {
	StyleSheet,
	View,
	FlatList,
	TouchableOpacity,
	Image,
} from "react-native";
import colors from "../../config/pearColors";
import routes from "../../navigation/routes";
import AppText from "../General/AppText";

const HomeFlatList = ({ data, title, navigation }) => {
	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<AppText size={22} color={colors.black} align="left" Weight="bold">
					{title}
				</AppText>
				<TouchableOpacity
					onPress={() => navigation.navigate(routes.TEACHERS_SCREEN)} //bottom
				>
					<AppText size={18} color={colors.medium} align="right">
						See All
					</AppText>
				</TouchableOpacity>
			</View>
			<View style={styles.sectioContainer}>
				<FlatList
					data={data}
					keyExtractor={(item) => item.id.toString()}
					numColumns={4}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.sectionAlign}
							onPress={() =>
								navigation.navigate(routes.INSTRUCTOR_DETAILS, {
									Id: item.id,
								})
							} // stack
						>
							<View style={styles.cardContainer}>
								<Image source={item.image} />
								<AppText size={15} color={colors.black} align="center">
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

export default HomeFlatList;

const styles = StyleSheet.create({
	sectioContainer: {
		width: "100%",
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
});
