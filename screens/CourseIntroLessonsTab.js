import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GeneralButton from "../components/General/GeneralButton";

const CourseIntroLessonsTab = ({ name }) => {
	return (
		<View>
			<ScrollView>
				<GeneralButton title={name} />
				<GeneralButton title={name} />
				<GeneralButton title={name} />
			</ScrollView>
		</View>
	);
};

export default CourseIntroLessonsTab;

const styles = StyleSheet.create({});
