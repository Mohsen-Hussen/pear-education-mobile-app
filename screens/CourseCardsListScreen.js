import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	TouchableOpacity,
	Platform,
	Modal,
	Text,
	Dimensions,
	ActivityIndicator,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import colors from "../config/pearColors";
import Screen from "../components/General/Screen";
import AppText from "../components/General/AppText";
import CourseCard from "../components/Courses/CourseCard";
import GeneralButton from "../components/General/GeneralButton";

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
const rateFilterData = [
	{ value: '0-1', selected: false },
	{ value: '1-2', selected: false },
	{ value: '2-3', selected: false },
	{ value: '3-4', selected: false },
	{ value: '4-5', selected: false },
];
const subcategoryData = [
	{ value: 'HR', selected: false },
	{ value: 'Pharmacy Management', selected: false },
	{ value: 'PMP', selected: false },
	{ value: 'Supply Chain Managment', selected: false },
	{ value: 'Customer Management', selected: false },
];
const priceData = [
	{ value: 'Paid', selected: false },
	{ value: 'Free', selected: false },
];
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const CourseCardsListScreen = ({ navigation, route }) => {
	const ParamsTitle = route.params != null ? route.params.Title : "";
	const ParamsSearchText = route.params != null ? route.params.SearchText : "";
	const [modalVisible, setModalVisible] = useState(false);
	const [loading, setLoading] = useState(false);

	// flatlist pagnination example url
	// https://snack.expo.dev/embedded/@aboutreact/react-native-flatlist-pagination-to-load-more-data-dynamically---infinite-list?preview=true&platform=ios&iframeId=ixkzpou2uw&theme=dark
	const getData = () => {
		setLoading(true);
		// Get APi
		console.log("getData");
		// setLoading(false);
	};
	const renderLoading = () => {
		if (loading) {
			return (
				<ActivityIndicator
					color={colors.primary}
					size="large"
					style={{ marginHorizontal: 8 }}
				/>
			);
		}
		return null;
	};
	useEffect(() => {
		getData;
	}, []);


	const [filterDataSelected, setFilter] = useState([])
	console.log({ filterDataSelected });
	return (
		<>
			<Modal
				animationType="slide"
				visible={modalVisible}
				transparent={true}
				onRequestClose={() => setModalVisible(false)}
			>
				<View style={styles.centeredView}>
					<TouchableOpacity onPress={() => setModalVisible(false)} style={{ flex: 1, width: windowWidth }}>
					</TouchableOpacity>
					<View style={styles.modalView}>
						<AppText size={20} color={colors.black} Weight="bold">Filter</AppText>
						<AppText size={18} color={colors.medium} marginVertical={-5}>Pick The Filters To specify what you are looking for</AppText>
						<AppText size={20} color={colors.black} Weight="bold">Rate</AppText>
						<View style={{ flexDirection: 'row', justifyContent: "space-between" }} >
							{rateFilterData.map((item, index) => <FilterRate
								{...item}
								key={index}
								selectedValue={filterDataSelected}
								onSetSelected={(i) => {
									setFilter([...filterDataSelected, i])
								}} />)}
						</View>
						<AppText size={20} color={colors.black} Weight="bold">Subcategory</AppText>
						<View style={{ flexDirection: 'row', justifyContent: "space-between", flexWrap: "wrap" }} >
							{subcategoryData.map((item, index) => <FilterCategory
								{...item}
								key={index}
								selectedValue={filterDataSelected}
								onSetSelected={(i) => {
									setFilter([...filterDataSelected, i])
								}} />)}
						</View>
						<AppText size={20} color={colors.black} Weight="bold">Price</AppText>
						<View style={{ flexDirection: 'row' }} >
							{priceData.map((item, index) => <FilterPrice
								{...item}
								key={index}
								selectedValue={filterDataSelected}
								onSetSelected={(i) => {
									setFilter([...filterDataSelected, i])
								}} />)}
						</View>
						<View style={{ justifyContent: "center", alignItems: "center" }}>
							<GeneralButton title="Apply Filter" onPress={() => {
								console.log("apply filter tapped");
								setModalVisible(false);
							}} />
						</View>
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
				<Text> Selected Filter ={ParamsTitle}</Text>
				<Text>Search Text = {ParamsSearchText}</Text>
				<View style={styles.flatListContainer}>
					<FlatList
						data={courseData}
						keyExtractor={(item) => item.id.toString()}
						enableEmptySections={true}
						ListFooterComponent={renderLoading}
						// onScrollBeginDrag={() => console.log("onScrollBeginDrag")}
						onEndReached={() => getData()}
						onEndReachedThreshold={0}
						renderItem={({ item }) => (
							<CourseCard
								imgSource={item.image}
								ID={item.id}
								instractourName={item.instractourName}
								courseName={item.courseName}
								courseDescription={item.courseDescription}
								courseDutation={item.courseDutation}
								navigation={navigation}
							/>
						)}
					/>
				</View>
			</Screen>
		</>
	);
};

const FilterRate = ({ selected, value, selectedValue, onSetSelected }) => {
	const [selectedVal, setSelected] = useState(selected);
	return (
		<TouchableOpacity onPress={() => {
			if (selectedVal) {
				const filtered = selectedValue.filter(item => item.value != value)
				console.log(filtered);
				setSelected(false)
			} else {
				setSelected(!selected)
				onSetSelected({
					selected, value,
				})
			}
		}}>
			<View style={{
				paddingHorizontal: 8,
				borderRadius: 8,
				borderWidth: 1,
				borderColor: selectedVal ? colors.primary : colors.medium,
				backgroundColor: selectedVal ? colors.primary : colors.white,
				width: windowWidth / 7.5,
			}}>
				<Text style={{ color: selectedVal ? colors.white : colors.medium, textAlign: "center", alignItems: "center", fontSize: 18 }}>{value}</Text>
			</View>
		</TouchableOpacity >
	);
};
const FilterCategory = ({ selected, value, selectedValue, onSetSelected }) => {
	const [selectedVal, setSelected] = useState(selected);
	return (
		<TouchableOpacity onPress={() => {
			if (selectedVal) {
				const filtered = selectedValue.filter(item => item.value != value)
				console.log(filtered);
				setSelected(false)
			} else {
				setSelected(!selected)
				onSetSelected({
					selected, value,
				})
			}
		}}>
			<View style={{
				paddingHorizontal: 8,
				borderRadius: 8,
				borderWidth: 1,
				borderColor: selectedVal ? colors.primary : colors.medium,
				backgroundColor: selectedVal ? colors.primary : colors.white,
				marginBottom: 5,
			}}>
				<Text style={{ color: selectedVal ? colors.white : colors.medium, textAlign: "center", alignItems: "center", fontSize: 18 }}>{value}</Text>
			</View>
		</TouchableOpacity >
	);
};
const FilterPrice = ({ selected, value, selectedValue, onSetSelected }) => {
	const [selectedVal, setSelected] = useState(selected);
	return (
		<TouchableOpacity onPress={() => {
			if (selectedVal) {
				const filtered = selectedValue.filter(item => item.value != value)
				console.log(filtered);
				setSelected(false)
			} else {
				setSelected(!selected)
				onSetSelected({
					selected, value,
				})
			}
		}}>
			<View style={{
				paddingHorizontal: 8,
				borderRadius: 8,
				borderWidth: 1,
				borderColor: selectedVal ? colors.primary : colors.medium,
				backgroundColor: selectedVal ? colors.primary : colors.white,
				marginRight: 8,
				marginBottom: 15,
			}}>
				<Text style={{ color: selectedVal ? colors.white : colors.medium, textAlign: "center", alignItems: "center", fontSize: 18 }}>{value}</Text>
			</View>
		</TouchableOpacity >
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
		backgroundColor: "rgba(0,0,0,0.7)",
	},
	modalView: {
		backgroundColor: "white",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 30,
		width: windowWidth,
		height: windowHeight / 1.4,
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
