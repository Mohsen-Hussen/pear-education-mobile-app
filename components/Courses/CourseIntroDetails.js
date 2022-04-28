import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	View,
	Image,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import AppText from "../../components/General/AppText";
import colors from "../../config/pearColors";
import { Ionicons } from "@expo/vector-icons";
const parkVideo = require("../../assets/pearImages/sample-10s.mp4");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
import { Video, AVPlaybackStatus } from 'expo-av';
import pearColors from "../../config/pearColors";
import VideoPlayer from "../General/VideoPlayer";

import { openVideo } from "../../redux/openVideoSlice"
import { useSelector, useDispatch } from "react-redux";

const CourseIntroDetails = ({
	imgSrc,
	categoryName,
	courseTitle,
	courseSubtitle,
	courseDescription,
	IntroVideo
}) => {
	const VideoState = useSelector((state) => state.openVideo);
	const dispatch = useDispatch();
	// const [open, setOpen] = useState(false)

	return (
		<View >
			{/* {open ? <VideoPlayer url="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" onPress={() => { setOpen(false) }} /> : null}
			{open ? <VideoPlayer vidurl={require("../../assets/pearImages/abotreka.mp4")} onPress={() => { setOpen(false) }} /> : null}
 */}



			<View style={styles.imgThubContainer}>
				<Image source={imgSrc} style={styles.imgThub} />
			</View>
			<View style={styles.courseDetailesContainer}>
				<TouchableOpacity
					onPress={() => {
						dispatch(openVideo(IntroVideo));
					}}
					activeOpacity={0.8}
					style={styles.iconContainer}
				>
					<Ionicons name="play-outline" size={40} color={colors.primary} />
				</TouchableOpacity>
				<View style={styles.courseDescriptionContainer}>
					<View style={styles.categoryContainer}>
						<AppText size={16} color={colors.skillsColor} Weight="bold" marginVertical={3}>
							{categoryName}
						</AppText>
					</View>
					<View>
						<AppText size={17} Weight="bold" marginVertical={3}>
							{courseTitle}
						</AppText>
						<AppText size={13} color={colors.medium} marginVertical={3}>
							{courseSubtitle}
						</AppText>
						<AppText
							size={16}
							color={colors.black}
							Weight="bold"
							marginVertical={3}
						>
							About This Course
						</AppText>
						<AppText size={14} color={colors.medium} marginVertical={3}>
							{courseDescription}
						</AppText>
					</View>
				</View>
			</View>
		</View >
	);
};

export default CourseIntroDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imgThubContainer: {
		width: "100%",
		height: windowHeight / 6,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		overflow: "hidden",

	},
	imgThub: {
		width: windowWidth,
		resizeMode: "cover",
	},
	courseDetailesContainer: {
		width: "100%",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		backgroundColor: colors.white,
		paddingHorizontal: 8,
		position: 'relative',
		top: -10,


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
