import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
import { useDispatch } from "react-redux";
import { loadingTrue } from "../redux";

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
	//get course card info from redux
	const globalState = useSelector((state) => state.courseCardInfo);

	const courseData = globalState.courseData;
	const ParamsTitle = route.params != null ? route.params.Title : "";
	const ParamsSearchText = route.params != null ? route.params.SearchText : "";
	const [modalVisible, setModalVisible] = useState(false);

	const dispatch = useDispatch()


	const [loading, setLoading] = useState(false);

	// flatlist pagnination example url
	// https://snack.expo.dev/embedded/@aboutreact/react-native-flatlist-pagination-to-load-more-data-dynamically---infinite-list?preview=true&platform=ios&iframeId=ixkzpou2uw&theme=dark
	const getData = () => {
		setLoading(true);
		// Get APi
		console.log("getData");
		// setLoading(false);
	};

	useEffect(() => {
		// its how to use useDispatch with connected function 
		// dispatch(loadingTrue())

	}, [])
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



	const [selectedValue, setSelectedValue] = useState([]);
	const onSelectMulti = (value) => {
		const index = selectedValue.indexOf(value);
		let newValue;
		if (index === -1) {
			// add
			newValue = [...selectedValue, value];
		} else {
			// remove
			newValue = [
				...selectedValue.slice(0, index),
				...selectedValue.slice(index + 1),
			];
		}

		setSelectedValue(newValue);
	}

	const [selectedCategory, setSelectedCategory] = useState([]);
	const onSelectMultiCategory = (value) => {
		const index = selectedCategory.indexOf(value);
		let newValue;
		if (index === -1) {
			// add
			newValue = [...selectedCategory, value];
		} else {
			// remove
			newValue = [
				...selectedCategory.slice(0, index),
				...selectedCategory.slice(index + 1),
			];
		}

		setSelectedCategory(newValue);
	}
	const [selectedPrice, setSelectedPrice] = useState([]);
	const onSelectMultiPrice = (value) => {
		const index = selectedPrice.indexOf(value);
		let newValue;
		if (index === -1) {
			// add
			newValue = [...selectedPrice, value];
		} else {
			// remove
			newValue = [
				...selectedPrice.slice(0, index),
				...selectedPrice.slice(index + 1),
			];
		}

		setSelectedPrice(newValue);
	}
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
								onPress={onSelectMulti}
							/>)}
						</View>
						<AppText size={20} color={colors.black} Weight="bold">Subcategory</AppText>
						<View style={{ flexDirection: 'row', justifyContent: "space-between", flexWrap: "wrap" }} >
							{subcategoryData.map((item, index) => <FilterCategory
								{...item}
								key={index}
								onPress={onSelectMultiCategory} />)}
						</View>
						<AppText size={20} color={colors.black} Weight="bold">Price</AppText>
						<View style={{ flexDirection: 'row' }} >
							{priceData.map((item, index) => <FilterPrice
								{...item}
								key={index}
								onPress={onSelectMultiPrice} />)}
						</View>
						<View style={{ justifyContent: "center", alignItems: "center" }}>
							<GeneralButton title="Apply Filter" onPress={() => {

								console.log({ selectedValue });
								console.log({ selectedCategory });
								console.log({ selectedPrice });
								setModalVisible(false);

								setSelectedCategory([])
								setSelectedPrice([])
								setSelectedValue([])
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

const FilterRate = ({ value, onPress, }) => {
	const [selectedVal, setSelected] = useState(false);

	return (
		<TouchableOpacity
			onPress={() => {
				setSelected(!selectedVal)
				onPress(value)

			}}
		>
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
const FilterCategory = ({ onPress, value, }) => {
	const [selectedVal, setSelected] = useState(false);
	return (
		<TouchableOpacity onPress={() => {
			setSelected(!selectedVal)
			onPress(value)
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
const FilterPrice = ({ value, onPress }) => {
	const [selectedVal, setSelected] = useState(false);
	return (
		<TouchableOpacity onPress={() => {
			setSelected(!selectedVal)
			onPress(value)
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
