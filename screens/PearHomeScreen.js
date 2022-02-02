import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	FlatList,
	TouchableOpacity,
	Image,
	Platform,
	ScrollView,
} from "react-native";
import Constants from "expo-constants";

import colors from "../config/pearColors";

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
	// {
	// 	id: 4,
	// 	image: require("../assets/pearImages/books.png"),
	// 	title: "University  Level",
	// },
	// {
	// 	id: 5,
	// 	image: require("../assets/pearImages/books.png"),
	// 	title: "University  Level",
	// },
	// {
	// 	id: 6,
	// 	image: require("../assets/pearImages/books.png"),
	// 	title: "University  Level",
	// },
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
];

const PearHomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			{/* education section flatlist */}
			<View style={styles.sectioContainer}>
				<Text style={styles.text}>All Education Level</Text>
				<View style={styles.sectionAlign}>
					<FlatList
						showsHorizontalScrollIndicator={false}
						horizontal
						data={educationData}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<TouchableOpacity>
								<View style={styles.item}>
									<Image source={item.image} style={styles.image} />
									<Text style={styles.title}>{item.title}</Text>
								</View>
							</TouchableOpacity>
						)}
					/>
				</View>
			</View>
			{/* centers section flatlist */}
			<View style={styles.sectioContainer}>
				<Text style={styles.text}>All Centers</Text>
				<View style={styles.sectionAlign}>
					<FlatList
						showsHorizontalScrollIndicator={false}
						horizontal
						data={centersData}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<TouchableOpacity>
								<View style={styles.item}>
									<Image source={item.image} style={styles.image} />
									<Text style={styles.title}>{item.title}</Text>
								</View>
							</TouchableOpacity>
						)}
					/>
				</View>
			</View>
			{/* teachers section flatlist */}
			<ScrollView style={styles.sectioContainer}>
				<Text style={styles.text}>Our Teachers</Text>
				<View style={styles.teachersCardContainer}>
					<View style={styles.teacherCardStyle}>
						<FlatList
							data={teachersData}
							keyExtractor={(item) => item.id}
							numColumns={4}
							renderItem={({ item }) => (
								<TouchableOpacity
									style={{
										flex: 1,
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<View style={{ marginVertical: 10 }}>
										<Image source={item.image} />
										<Text style={styles.title}>{item.title}</Text>
									</View>
								</TouchableOpacity>
							)}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default PearHomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 20,
		paddingTop: Constants.statusBarHeight * 2,
	},
	sectioContainer: {
		width: "100%",
		padding: Platform.OS === "android" ? 10 : 20,
		marginBottom: 15,
	},
	text: {
		width: "100%",
		marginBottom: 20,
		fontSize: 20,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		fontWeight: "600",
		color: colors.gray,
	},
	sectionAlign: {
		justifyContent: "center",
		alignItems: "center",
	},
	item: {
		marginHorizontal: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	image: { marginBottom: 5, height: 45 },
	title: {
		fontSize: 17,
		color: colors.medium,
		fontWeight: "500",
	},
	teachersCardContainer: {
		// flexDirection: "row",
		// justifyContent: "center",
		// alignItems: "center",
		width: "100%",
		marginBottom: 20,
	},
	teacherCardStyle: {
		marginHorizontal: Platform.OS === "ios" ? 5 : 0,
		// backgroundColor: "red",
	},
});
