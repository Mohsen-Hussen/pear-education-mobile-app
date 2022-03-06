import React from "react";
import { ScrollView, StyleSheet, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import pearColors from "../config/pearColors";
import CourseIntroLessonsTab from "../screens/CourseIntroLessonsTab";
import InstructorCard from "../components/Instructor/InstructorCard";
import Screen from "../components/General/Screen";

const Tab = createMaterialTopTabNavigator();
const windowWidth = Dimensions.get("window").width;

const CourseIntroNavigation = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarLabelStyle: { fontSize: 17 },
				tabBarIndicatorStyle: {
					backgroundColor: pearColors.primary,
					height: 7,
				},
				tabBarItemStyle: {
					width: windowWidth / 2.1,
				},
				tabBarScrollEnabled: true,
			}}
		>
			<Tab.Screen
				name="Lessons"
				children={() => (
					<Screen style={{ backgroundColor: pearColors.white }}>
						<CourseIntroLessonsTab />
					</Screen>
				)}
			/>
			<Tab.Screen
				name="Instructor"
				children={() => (
					<ScrollView>
						<Screen style={{ backgroundColor: pearColors.white }}>
							<InstructorCard
								imageUri="https://reactjs.org/logo-og.png"
								InstructorName="Dr. Ahmed Selem"
								InstructorPosition="Developer and Lead Instructor"
								totalStudents="874,487"
								Reviews="120,021"
								AboutMe="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
							/>
						</Screen>
					</ScrollView>
				)}
			/>
		</Tab.Navigator>
	);
};

export default CourseIntroNavigation;

const styles = StyleSheet.create({});
