import React from "react";
import {
	StyleSheet,
	View,
	Image,
	Dimensions,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import AppText from "../../components/General/AppText";
import colors from "../../config/pearColors";
import { Ionicons } from "@expo/vector-icons";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const CourseIntroDetails = ({
	imgSrc,
	categoryName,
	courseTitle,
	courseSubtitle,
	courseDescription,
}) => {
	return (
		<View>
			{/* <View style={styles.imgThubContainer}>
				<Image source={imgSrc} style={styles.imgThub} />
			</View> */}
			<View style={styles.courseDetailesContainer}>
				<TouchableOpacity
					onPress={() => console.log("play icon tapped")}
					activeOpacity={0.8}
					style={styles.iconContainer}
				>
					<Ionicons name="play-outline" size={40} color={colors.primary} />
				</TouchableOpacity>
				<View style={styles.courseDescriptionContainer}>
					<View style={styles.categoryContainer}>
						<AppText size={16} color={colors.skillsColor} Weight="bold">
							{categoryName}
						</AppText>
					</View>
					<View>
						<AppText size={17} Weight="bold">
							{courseTitle}
						</AppText>
						<AppText size={13} color={colors.medium} marginVertical={0}>
							{courseSubtitle}
						</AppText>
						<AppText
							size={16}
							color={colors.black}
							Weight="bold"
							marginVertical={10}
						>
							About This Course
						</AppText>
						<AppText size={14} color={colors.medium} marginVertical={0}>
							{courseDescription}
						</AppText>
					</View>
				</View>
			</View>
		</View>
	);
};

export default CourseIntroDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	// imgThubContainer: {
	// 	width: "100%",
	// 	height: windowHeight / 2.5,
	// 	borderTopLeftRadius: 10,
	// 	borderTopRightRadius: 10,
	// 	overflow: "hidden",
	// },
	// imgThub: {
	// 	maxWidth: "100%",
	// 	resizeMode: "cover",
	// 	maxHeight: "100%",
	// },
	courseDetailesContainer: {
		width: "100%",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		top: -20,
		backgroundColor: colors.white,
		padding: 8,
	},
	iconContainer: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: colors.white,
		position: "absolute",
		top: -30,
		right: 15,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: colors.black,
		shadowOffset: { width: -2, height: 10 },
		shadowOpacity: 0.7,
		shadowRadius: 3,
		elevation: 20,
	},
	courseDescriptionContainer: {
		marginTop: 10,
	},
	categoryContainer: {
		backgroundColor: colors.skillsBackground,
		width: windowWidth / 3,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});
