import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const CourseCurriculum = () => {
	return (
		<View>
			<Text>CourseCurriculum</Text>
		</View>
	);
};

export default CourseCurriculum;

const styles = StyleSheet.create({});
