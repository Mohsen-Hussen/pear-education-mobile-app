import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/pearColors";
import Screen from "../components/General/Screen";
import { enrolledTrue } from "../redux/isEnrolledStatusSlice"
import { closeVideo } from "../redux/openVideoSlice"
import CourseIntroDetails from "../components/Courses/CourseIntroDetails";
import CourseCurriculum from "../components/Courses/CourseCurriculum";
import GeneralButton from "../components/General/GeneralButton";
import VideoPlayer from "../components/General/VideoPlayer";

const CoursesIntroScreen = ({ route }) => {
	const itemSelectedId = route.params != null ? route.params.itemID : "";
	const globalState = useSelector((state) => state.courseCardInfo);
	const courseData = globalState.courseData.find(course => course.id === itemSelectedId);
	// console.log(courseData);
	// console.log(courseData.id);
	// console.log(itemSelectedId);
	const enrolledState = useSelector((state) => state.enrolled);
	const isEnrolled = enrolledState.enrolledStatus;
	const dispatch = useDispatch();
	const VideoState = useSelector((state) => state.openVideo);
	console.log(VideoState)
	return (
		<Screen style={{
			backgroundColor: colors.white,
		}}>
			{VideoState.showVideo ? <VideoPlayer url={VideoState.uri} onPress={() => { dispatch(closeVideo()) }} /> : null}

			<CourseIntroDetails
				imgSrc={courseData.image}
				categoryName={courseData.categoryName}
				courseTitle={courseData.courseName}
				courseSubtitle={`${courseData.instractourName} - ${courseData.courseDutation} - ${courseData.courseLessons}`}
				courseDescription={courseData.courseDescription}
			/>
			{/* <Text> itemSelectedId= {itemSelectedId}</Text> */}
			<CourseCurriculum />
			<View style={{ justifyContent: "flex-end", alignItems: "center" }}>
				<GeneralButton
					onPress={() => {
						dispatch(enrolledTrue());
						console.log("enroll now button tapped", isEnrolled);
					}}
					title="Enroll Now"
					style={{ padding: 2, marginVertical: 5, display: isEnrolled ? "none" : null }}
				/>
			</View>
		</Screen>
	);
};

export default CoursesIntroScreen;

const styles = StyleSheet.create({});
