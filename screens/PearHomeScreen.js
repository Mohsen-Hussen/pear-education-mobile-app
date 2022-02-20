import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import HomeSlider from "../components/PearHome/HomeSlider";
import HomeFlatList from "../components/PearHome/HomeFlatList";

const educationData = [
	{
		id: 1,
		image: require("../assets/pearImages/secondary.png"),
		title: "Secondary Level",
	},
	{
		id: 2,
		image: require("../assets/pearImages/secondary.png"),
		title: "Preparatory Level",
	},
	{
		id: 3,
		image: require("../assets/pearImages/books.png"),
		title: "University  Level",
	},
];
const centersData = [
	{
		id: 1,
		image: require("../assets/pearImages/books.png"),
		title: "Eltafawk",
	},
	{
		id: 2,
		image: require("../assets/pearImages/books.png"),
		title: "Eltafawk",
	},
	{
		id: 3,
		image: require("../assets/pearImages/books.png"),
		title: "Eltafawk",
	},
	{
		id: 4,
		image: require("../assets/pearImages/books.png"),
		title: "Eltafawk",
	},
	{
		id: 5,
		image: require("../assets/pearImages/books.png"),
		title: "Eltafawk",
	},
	{
		id: 6,
		image: require("../assets/pearImages/books.png"),
		title: "Eltafawk",
	},
];
const teachersData = [
	{
		id: 1,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 2,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 3,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 4,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 5,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 6,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 7,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 8,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 9,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 10,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 11,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 12,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 13,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 14,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 15,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 16,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 17,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 18,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 19,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
	{
		id: 20,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Ahmed",
	},
];

const PearHomeScreen = () => {
	// useEffect(() => {
	// 	LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
	// }, []);
	return (
		<SafeAreaView style={styles.container}>
			<HomeSlider data={educationData} title="All Education Level" />
			<HomeSlider data={centersData} title="All Centers" />
			<HomeFlatList data={teachersData} title="Our Teachers" />
			<h3>test</h3>
		</SafeAreaView>
	);
};

export default PearHomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 20,
		paddingTop: StatusBar.currentHeight,
	},
});
