import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/pearColors";
import AppText from "../components/General/AppText";

import { openVideo } from "../redux/openVideoSlice"

const lessonsData = [
	{
		id: 1,
		title: "01.Introduction",
		subTitle: "Mentor:Ahmed Selem",
		duration: "5:12",
		uri: "http://techslides.com/demos/sample-videos/small.mp4",
	},
	{
		id: 2,

		title: "02.Hello Friends",
		subTitle: "Mentor:Ahmed Selem",
		duration: "2:22",
		uri: "	https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
	},
	{
		id: 3,
		title: "03.Questions",
		subTitle: "Mentor:Ahmed Selem",
		duration: "3:50",
	},
	{
		id: 4,
		title: "0.4.State",
		subTitle: "Mentor:Ahmed Selem",
		duration: "9:10",
	},
	{
		id: 5,
		title: "0.5.Props",
		subTitle: "Mentor:Ahmed Selem",
		duration: "1:20",
	},
	{
		id: 6,
		title: "0.6.Hooks",
		subTitle: "Mentor:Ahmed Selem",
		duration: "8:00",
	},
];
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CourseIntroLessonsTab = () => {
	//get enrolled status from redux
	const globalState = useSelector((state) => state.enrolled);
	const isEnrolled = globalState.enrolledStatus;
	const VideoState = useSelector((state) => state.openVideo);
	const dispatch = useDispatch();
	// function to toggle icon lesson from play to lock 
	const ToggleIcon = ({ uri }) => {
		if (isEnrolled) {
			return (
				<TouchableOpacity
					onPress={() => {
						dispatch(openVideo(uri));
					}}
				>
					<AntDesign name="play" size={30} color={colors.primary} />
				</TouchableOpacity >
			)
		} else {
			return (
				<TouchableOpacity style={styles.lockIconContainer}>
					<FontAwesome5 name="lock" size={30} color={colors.medium} />
				</TouchableOpacity>
			)
		}
	}
	return (
		<>
			{lessonsData.map((item) => (
				<View
					key={item.id}
					style={{ marginBottom: 10 }}

				>
					<View style={styles.lessonContainer}>
						{ToggleIcon({ uri: item.uri })}
						<View
							style={{
								width: windowWidth / 1.9,
							}}
						>
							<AppText
								size={16}
								Weight="bold"
								marginVertical={0}
								color={colors.black}
							>
								{item.title}
							</AppText>
							<AppText size={14} marginVertical={0} color={colors.medium}>
								{item.subTitle}
							</AppText>
							<View style={[styles.lessonDivider, { backgroundColor: isEnrolled ? colors.primary : colors.grayLight, }]}></View>
						</View>
						<View>
							<AppText size={15} marginVertical={0} color={colors.medium}>
								{item.duration}
							</AppText>
						</View>
					</View>
				</View>
			)
			)}
		</>
	);
};

export default CourseIntroLessonsTab;

const styles = StyleSheet.create({
	lessonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	lessonDivider: {
		width: "100%",
		height: 5,
		borderRadius: 10,
		marginBottom: 20,
	},
	lockIconContainer: {
		backgroundColor: colors.lessonsLock,
		width: 50,
		height: 50,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
});
