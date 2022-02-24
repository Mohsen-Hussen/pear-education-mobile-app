import React, { useState } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	TouchableOpacity,
	Platform,
	Modal,
	Pressable,
	Text,
} from "react-native";
import Screen from "../components/General/Screen";
import AppText from "../components/General/AppText";
import colors from "../config/pearColors";
import { AntDesign } from "@expo/vector-icons";
import CourseCard from "../components/Courses/CourseCard";
import CourseModal from "../components/Courses/CourseModal";

const courseData = [
	{
		id: 1,
		image: require("../assets/pearImages/all-course-1.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 2,
		image: require("../assets/pearImages/all-course-2.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 3,
		image: require("../assets/pearImages/all-course-3.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 4,
		image: require("../assets/pearImages/all-course-1.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 5,
		image: require("../assets/pearImages/all-course-2.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 6,
		image: require("../assets/pearImages/all-course-3.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 7,
		image: require("../assets/pearImages/all-course-1.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 8,
		image: require("../assets/pearImages/all-course-2.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 9,
		image: require("../assets/pearImages/all-course-3.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 10,
		image: require("../assets/pearImages/all-course-1.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 11,
		image: require("../assets/pearImages/all-course-2.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 12,
		image: require("../assets/pearImages/all-course-3.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 13,
		image: require("../assets/pearImages/all-course-1.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 14,
		image: require("../assets/pearImages/all-course-2.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 15,
		image: require("../assets/pearImages/all-course-3.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 16,
		image: require("../assets/pearImages/all-course-1.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 17,
		image: require("../assets/pearImages/all-course-2.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 18,
		image: require("../assets/pearImages/all-course-3.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
];

const CourseCardsListScreen = () => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<Screen style={styles.container}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Hello World!</Text>
						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text style={styles.textStyle}>Hide Modal</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
			<View style={styles.headerContainer}>
				<AppText
					size={20}
					color={colors.black}
					marginVertical={5}
					Weight="bold"
				>
					All Courses
				</AppText>
				<TouchableOpacity onPress={() => setModalVisible(true)}>
					<View style={styles.filterIconStyle}>
						<AntDesign name="find" size={20} color={colors.white} />
					</View>
				</TouchableOpacity>
			</View>
			<View style={styles.flatListContainer}>
				<FlatList
					data={courseData}
					keyExtractor={(item) => item.id.toString()}
					initialNumToRender={5}
					renderItem={({ item }) => (
						<CourseCard
							imgSource={item.image}
							instractourName={item.instractourName}
							courseName={item.courseName}
							courseDescription={item.courseDescription}
							courseDutation={item.courseDutation}
						/>
					)}
				/>
			</View>
		</Screen>
	);
};

export default CourseCardsListScreen;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: Platform.OS === "ios" ? 5 : 0,
	},
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	filterIconStyle: {
		backgroundColor: colors.primary,
		padding: 10,
		borderRadius: 8,
	},
	flatListContainer: { flex: 1, marginTop: 8 },
	//Modal style
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
	filterIconStyle: {
		backgroundColor: colors.primary,
		padding: 10,
		borderRadius: 8,
	},
});
