import React, { useState, useRef, useEffect } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	TouchableOpacity,
	Platform,
	Modal,
	Pressable,
	Text,
	Dimensions,
	ActivityIndicator,
} from "react-native";
import { useFormikContext } from "formik";
import * as Yup from "yup";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/pearColors";
import LottieView from "lottie-react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Screen from "../components/General/Screen";
import AppText from "../components/General/AppText";
import CourseCard from "../components/Courses/CourseCard";
import AppForm from "../components/forms/AppForm";
import AppBounceyCheckBox from "../components/forms/AppBounceyCheckBox";
import SubmitButton from "../components/forms/SubmitButton";
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
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

// const validationSchema = Yup.object().shape({
// 	email: Yup.string().label("Email"),
// 	password: Yup.string().required().min(4).label("Password"),
// });

const CourseCardsListScreen = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [loading, setLoading] = useState(true);

	// flatlist pagnination example url
	// https://snack.expo.dev/embedded/@aboutreact/react-native-flatlist-pagination-to-load-more-data-dynamically---infinite-list?preview=true&platform=ios&iframeId=ixkzpou2uw&theme=dark
	const getData = () => {
		console.log("getData");
		setLoading(true);
	};

	const renderFooter = () => {
		return (
			//Footer View with Load More button
			<View style={styles.footer}>
				<TouchableOpacity
					activeOpacity={0.9}
					onPress={getData}
					//On Click of button calling getData function to load more data
					style={styles.loadMoreBtn}
				>
					<Text style={styles.btnText}>Load More</Text>
					{loading ? (
						<ActivityIndicator
							color={colors.white}
							size="large"
							style={{ marginHorizontal: 8 }}
						/>
					) : null}
				</TouchableOpacity>
			</View>
		);
	};
	useEffect(() => {
		getData;
	}, []);
	return (
		<>
			<Modal
				animationType="slide"
				visible={modalVisible}
				transparent={true}
				onRequestClose={() => setModalVisible(false)}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<AppForm
							initialValues={{ custom: "", text: "" }}
							onSubmit={(values) => console.log(values)}
							// validationSchema={validationSchema}
						>
							{/* <BouncyCheckbox
								size={25}
								fillColor="red"
								unfillColor="#FFFFFF"
								text="Custom Checkbox"
								iconStyle={{ borderColor: "red" }}
								ref={checkboxRef}
								// onPress={(isChecked) => {
								// 	setIsChecked(!isChecked);
								// 	console.log(isChecked);
								// }}
								onPress={(isChecked) => {
									console.log("Custom Checkbox");
								}}
							/>
							 */}
							<AppBounceyCheckBox name="custom" />
							<AppBounceyCheckBox name="text" />

							<SubmitButton
								title="Submit"
								// onPress={(values) => {
								// 	console.log(values);

								// 	// setModalVisible(!modalVisible);
								// 	// console.log("tapped");
								// 	// console.log(checkboxRef.current.checked);
								// 	// console.log(!isChecked);
								// }}
							/>
							{/* <Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={() => {
									setModalVisible(!modalVisible);
									console.log("tapped");
									console.log(checkboxRef.current.checked);
									// console.log(!isChecked);
								}}
							>
								<Text style={styles.textStyle}>Apply Modal</Text>
							</Pressable> */}
						</AppForm>
						{/* <Text style={styles.modalText}>Modal Content</Text> */}
					</View>
				</View>
			</Modal>
			<Screen style={styles.container}>
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
						enableEmptySections={true}
						ListFooterComponent={renderFooter}
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
		</>
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
		justifyContent: "flex-end",
		alignItems: "center",
		marginTop: 22,
		backgroundColor: "rgba(0,0,0,0.7)",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	modalView: {
		// margin: 20,
		backgroundColor: "white",
		// borderRadius: 20,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 35,
		alignItems: "center",
		width: windowWidth,
		height: windowHeight / 1.5,
		// shadowColor: "#000",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 2,
		// },
		// shadowOpacity: 0.25,
		// shadowRadius: 4,
		// elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		width: windowWidth / 2,
	},
	// buttonOpen: {
	// 	backgroundColor: "#F194FF",
	// },
	buttonClose: {
		backgroundColor: colors.primary,
	},
	textStyle: {
		color: colors.white,
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
	// load more getDataFooter
	footer: {
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	loadMoreBtn: {
		padding: 10,
		backgroundColor: colors.primary,
		borderRadius: 20,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
	btnText: {
		color: colors.white,
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
});
