import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GeneralButton from "../General/GeneralButton";
import pearColors from "../../config/pearColors";
import CoursesFlatList from "../DnsHome/CoursesFlatList";
import { NavigationContainer } from "@react-navigation/native";
import CourseIntroNavigation from "../../navigation/CourseIntroNavigation";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const CourseCurriculum = () => {
	return <CourseIntroNavigation />;
};

export default CourseCurriculum;

const styles = StyleSheet.create({});
