import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import pearColors from "../config/pearColors";
import CoursesFlatList from "../components/DnsHome/CoursesFlatList";
import CourseIntroLessonsTab from "../screens/CourseIntroLessonsTab";
import InstructorCard from "../components/Instructor/InstructorCard";
import Screen from "../components/General/Screen";
const Tab = createMaterialTopTabNavigator();

const CourseIntroNavigation = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarLabelStyle: { fontSize: 17 },
				tabBarIndicatorStyle: {
					backgroundColor: pearColors.primary,
					height: 2,
				},
				tabBarItemStyle: {
					width: 160,
				},
				tabBarScrollEnabled: true,
			}}
		>
			<Tab.Screen
				name="Lessons"
				children={() => <CourseIntroLessonsTab name="Tessssst" />}
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
							></InstructorCard>
						</Screen>
					</ScrollView>
				)}
			/>
		</Tab.Navigator>
	);
};

export default CourseIntroNavigation;

const styles = StyleSheet.create({});
