import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	StyleSheet,
	View,
	Dimensions,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import colors from "../config/pearColors";
import routes from "../navigation/routes";
import Screen from "../components/General/Screen";
import FilterBar from "../components/General/FilterBar";
import AppText from "../components/General/AppText";

import CoursesFlatList from "../components/DnsHome/CoursesFlatList";
import InstractourFlatList from "../components/DnsHome/InstractourFlatList";
import FeedbackFlatList from "../components/DnsHome/FeedbackFlatList";

const Tab = createMaterialTopTabNavigator();

const windowHeight = Dimensions.get("window").height;

const DnsHomeScreen = ({ navigation }) => {
	return (
		<Screen>
			<ScrollView>
				<AppText size={22} color={colors.black} align="left" Weight="bold">
					Find a perfect course for you
				</AppText>
				<FilterBar
					placeholder="Search a course"
					placeholderColor="medium"
					searchIconName="search1"
					searchIconsize={37}
					searchIconColor="medium"
					filterIconName="find"
					filterIconSize={35}
					filterIconColor="white"
					navigation={navigation}
				/>
				<AppText size={22} color={colors.black} align="left" Weight="bold">
					All Categories
				</AppText>
				<View
					style={{
						height: windowHeight / 2.7,
					}}
				>
					<Tab.Navigator
						screenOptions={{
							tabBarLabelStyle: { fontSize: 17 },
							tabBarIndicatorStyle: {
								backgroundColor: colors.primary,
								height: 7,
							},
							tabBarItemStyle: {
								width: 160,
							},
							tabBarScrollEnabled: true,
						}}
					>
						<Tab.Screen
							name="DevOps"
							children={() => (
								<CoursesFlatList navigation={navigation}></CoursesFlatList>
							)}
						/>
						<Tab.Screen
							name="Sales"
							children={() => (
								<CoursesFlatList navigation={navigation}></CoursesFlatList>
							)}
						/>
						<Tab.Screen
							name="Marketing"
							children={() => (
								<CoursesFlatList navigation={navigation}></CoursesFlatList>
							)}
						/>
						<Tab.Screen
							name="Development"
							children={() => (
								<CoursesFlatList navigation={navigation}></CoursesFlatList>
							)}
						/>
						<Tab.Screen
							name="Design"
							children={() => (
								<CoursesFlatList navigation={navigation}></CoursesFlatList>
							)}
						/>
					</Tab.Navigator>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<AppText size={22} color={colors.black} align="left" Weight="bold">
						Our Top Instractours
					</AppText>
					<TouchableOpacity
						onPress={() => navigation.navigate(routes.TEACHERS_SCREEN)}
					>
						<AppText size={18} color={colors.medium} align="right">
							See All
						</AppText>
					</TouchableOpacity>
				</View>
				<InstractourFlatList navigation={navigation} />
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<AppText size={22} color={colors.black} align="left" Weight="bold">
						Feedback
					</AppText>
				</View>
				<FeedbackFlatList />
			</ScrollView>
		</Screen >
	);
};

export default DnsHomeScreen;

const styles = StyleSheet.create({});
