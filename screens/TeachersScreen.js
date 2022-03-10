import React, { useState } from "react";
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

const teachersData = [
	{
		id: 1,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 2,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 3,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 4,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 5,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 6,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 7,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 8,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 9,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 10,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 11,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 12,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 13,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 14,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 15,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 16,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 17,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 18,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 19,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
	{
		id: 20,
		image: require("../assets/pearImages/teacher_Default.png"),
		title: "Mr.Mohamed Enab",
		subject: "Math",
	},
];
const TeachersScreen = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);

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
						<Text style={styles.modalText}>Modal Content</Text>
						<GeneralButton
							title="Apply"
							onPress={() => {
								console.log("Apply tapped");
								setModalVisible(false);
							}}
						/>
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
		marginTop: 22,
		backgroundColor: "rgba(0,0,0,0.7)",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	modalView: {
		backgroundColor: "white",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 35,
		alignItems: "center",
		width: windowWidth,
		height: windowHeight / 1.5,
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});
