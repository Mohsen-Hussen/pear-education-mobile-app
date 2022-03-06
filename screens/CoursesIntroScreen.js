import React from "react";
import { StyleSheet, Image } from "react-native";
import colors from "../config/pearColors";
import Screen from "../components/General/Screen";
import CourseIntroDetails from "../components/Courses/CourseIntroDetails";
import CourseCurriculum from "../components/Courses/CourseCurriculum";

const CoursesIntroScreen = () => {
	return (
		<>
			<Image
				source={require("../assets/pearImages/course-intro-img.png")}
				style={{ height: 250 }}
			/>
			<Screen style={{ backgroundColor: colors.white }}>
				<CourseIntroDetails
					// imgSrc={require("../assets/pearImages/course-intro-img.png")}
					categoryName={"Soft Skills"}
					courseTitle={
						"Selling Skills-Selling Skills (Basic Selling Skills, Advanced Selling Skills)-Soft Skills"
					}
					courseSubtitle={"Ahmed Selem . 25 Lessons - 24 Hours"}
					courseDescription={
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever "
					}
				/>
				<CourseCurriculum />
			</Screen>
		</>
	);
};

export default CoursesIntroScreen;

const styles = StyleSheet.create({});
