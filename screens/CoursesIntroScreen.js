import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text } from "react-native";
import colors from "../config/pearColors";
import Screen from "../components/General/Screen";
import CourseIntroDetails from "../components/Courses/CourseIntroDetails";
import CourseCurriculum from "../components/Courses/CourseCurriculum";

const CoursesIntroScreen = ({ route }) => {
	const itemSelectedId = route.params != null ? route.params.itemID : "";
	const globalState = useSelector((state) => state.courseCardInfo);
	const courseData = globalState.courseData.find(course => course.id === itemSelectedId);
	console.log(courseData);
	console.log(courseData.id);
	console.log(itemSelectedId);

	return (
		<Screen style={{ backgroundColor: colors.white }}>
			<CourseIntroDetails
				imgSrc={courseData.image}
				categoryName={courseData.categoryName}
				courseTitle={courseData.courseName}
				courseSubtitle={`${courseData.instractourName} - ${courseData.courseDutation} - ${courseData.courseLessons}`}
				courseDescription={courseData.courseDescription}
			/>
			<Text> itemSelectedId= {itemSelectedId}</Text>
			<CourseCurriculum />
		</Screen>
	);
};

export default CoursesIntroScreen;

const styles = StyleSheet.create({});
