import React from "react";
import {
	StyleSheet,
	View,
	SafeAreaView,
	Image,
	Dimensions,
} from "react-native";
import colors from "../../config/pearColors";
import AppText from "../General/AppText";
import { AntDesign } from "@expo/vector-icons";

const windowHeight = Dimensions.get("window").height;

const CourseCard = ({
	imgSource,
	instractourName,
	courseName,
	courseDescription,
	courseDutation,
}) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.cardContainer}>
				<View style={styles.imageContainer}>
					<Image style={styles.imageCardStyle} source={imgSource} />
				</View>
				<View style={styles.textCardContainer}>
					<AppText size={12} color={colors.medium} marginVertical={3}>
						{instractourName}
					</AppText>
					<AppText
						size={17}
						color={colors.black}
						marginVertical={3}
						Weight="bold"
					>
						{courseName}
					</AppText>
					<AppText size={13} color={colors.black} marginVertical={3}>
						{courseDescription}
					</AppText>
					<View style={styles.durationContainer}>
						<AntDesign
							name="clockcircleo"
							size={12}
							color="black"
							style={{ marginRight: 5 }}
						/>
						<AppText size={13} color={colors.medium}>
							{courseDutation}
						</AppText>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default CourseCard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.screenBackground,
		marginVertical: 8,
	},
	cardContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: colors.white,
		borderRadius: 10,
		padding: 8,
		// borderColor: "red",
		// borderWidth: 2,
	},
	imageContainer: {
		// borderColor: "#000",
		// borderWidth: 2,
		width: "35%",
		height: windowHeight / 5,
		borderRadius: 10,
		overflow: "hidden",
	},
	imageCardStyle: {
		maxWidth: "100%",
		maxHeight: "100%",
	},
	textCardContainer: {
		// borderColor: "#000",
		// borderWidth: 2,
		width: "65%",
		justifyContent: "center",
		alignItems: "flex-start",
		borderRadius: 10,
		padding: 8,
	},
	durationContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
});
