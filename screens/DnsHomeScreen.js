import React from "react";
import {
	StyleSheet,
	View,
	Dimensions,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../config/pearColors";
import routes from "../navigation/routes";
import Screen from "../components/General/Screen";
import FilterBar from "../components/General/FilterBar";
import AppText from "../components/General/AppText";

import CoursesFlatList from "../components/DnsHome/CoursesFlatList";
import InstractourFlatList from "../components/DnsHome/InstractourFlatList";
import TeachersScreen from "../screens/TeachersScreen";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

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
						<Tab.Screen name="Hr" component={CoursesFlatList} />
						<Tab.Screen name="Design" component={CoursesFlatList} />
						<Tab.Screen name="Development" component={CoursesFlatList} />
						<Tab.Screen name="Marketing" component={CoursesFlatList} />
						<Tab.Screen name="Sales" component={CoursesFlatList} />
						<Tab.Screen name="DevOps" component={CoursesFlatList} />
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
					<TouchableOpacity onPress={() => console.log("tapped")}>
						<AppText size={18} color={colors.medium} align="right">
							See All
						</AppText>
					</TouchableOpacity>
				</View>
				<InstractourFlatList />
			</ScrollView>
		</Screen>
	);
};

export default DnsHomeScreen;

const styles = StyleSheet.create({});
