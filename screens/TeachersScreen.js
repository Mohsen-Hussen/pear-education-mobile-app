import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
	StyleSheet,
	Image,
	View,
	StatusBar,
	TouchableOpacity,
	Dimensions,
	FlatList,
	Modal,
	Text,
} from "react-native";

import Screen from "../components/General/Screen";
import AppText from "../components/General/AppText";
import colors from "../config/pearColors";
import FilterBar from "../components/General/FilterBar";
import FilterIcon from "../components/General/FilterIcon";
import GeneralButton from "../components/General/GeneralButton";
import routes from "../navigation/routes";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

//modal filter data
const rateFilterData = [
	{ value: '0-1', selected: false },
	{ value: '1-2', selected: false },
	{ value: '2-3', selected: false },
	{ value: '3-4', selected: false },
	{ value: '4-5', selected: false },
];
const subcategoryData = [
	{ value: 'Math', selected: false },
	{ value: 'Physics', selected: false },
	{ value: 'English', selected: false },
	{ value: 'Chemistry', selected: false },
	{ value: 'Biology', selected: false },
	{ value: 'French', selected: false },
	{ value: 'German', selected: false },
	{ value: 'Italian', selected: false },
	{ value: 'Arabic', selected: false },
	{ value: 'Geology', selected: false },
	{ value: 'History', selected: false },
	{ value: 'Geography', selected: false },
	{ value: 'Psychology,Philosophy', selected: false },
	{ value: 'Economics,Statistics', selected: false },
];
const priceData = [
	{ value: 'Paid', selected: false },
	{ value: 'Free', selected: false },
];

const TeachersScreen = ({ navigation }) => {
	const globalState = useSelector((state) => state.teachersInfo);
	const teachersData = globalState.teachersData;
	const [modalVisible, setModalVisible] = useState(false);

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
			<Screen style={{ backgroundColor: colors.screenBackground }}>
				<StatusBar style="auto" />
				<FilterBar
					placeholder="Search a course"
					placeholderColor="medium"
					searchIconName="search1"
					searchIconsize={37}
					searchIconColor="medium"
					filterIconName="find"
					filterIconSize={35}
					filterIconColor="white"
				/>
				<FilterIcon
					head="Filter"
					headSize={22}
					FilterIconSize={35}
					onPress={() => {
						console.log("filter tapped");
						setModalVisible(true);
					}}
				/>
				<FlatList
					data={teachersData}
					keyExtractor={(item) => item.id.toString()}
					numColumns={2}
					renderItem={({ item }) => (
						<View style={styles.teacherContainer}>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate(routes.INSTRUCTOR_DETAILS, {
										Id: item.id,
									})
								}
							>
								<View
									style={{
										justifyContent: "space-between",
										alignItems: "center",
									}}
								>
									<Image source={item.image} />
									<AppText
										size={17}
										color={colors.primary}
										Weight="bold"
										align="center"
									>
										{item.title}
									</AppText>
									<AppText
										size={15}
										color={colors.medium}
										align="center"
										marginVertical={0}
									>
										Subject:{item.subject}
									</AppText>
								</View>
							</TouchableOpacity>
						</View>
					)}
				/>
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

export default TeachersScreen;

const styles = StyleSheet.create({
	teacherContainer: {
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: 10,
		width: windowWidth / 3,
		backgroundColor: colors.white,
		paddingVertical: 15,
		marginVertical: 10,
		marginHorizontal: 5,
		flex: 1,
	},
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
		height: windowHeight / 1.25,
	},
});
