import React from "react";
import {
	StyleSheet,
	View,
	SafeAreaView,
	StatusBar,
	useWindowDimensions,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import colors from "../config/pearColors";
import FilterBar from "../components/General/FilterBar";
import AppText from "../components/General/AppText";

import CoursesFlatList from "../components/DnsHome/CoursesFlatList";
import InstractourFlatList from "../components/DnsHome/InstractourFlatList";

const Tab = createMaterialTopTabNavigator();

const DnsHomeScreen = () => {
	const window = useWindowDimensions();

	return (
		<SafeAreaView style={styles.container}>
			<AppText size={22} color={colors.black} align="left">
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
			<AppText size={22} color={colors.black} align="left">
				All Categories
			</AppText>
			<View
				style={{
					height: window.height / 3,
					flex: 1,
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
			<AppText size={22} color={colors.black} align="left">
				Our Top Instractours
			</AppText>
			<InstractourFlatList />
		</SafeAreaView>
	);
};

export default DnsHomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.screenBackground,
		padding: 20,
		paddingTop: StatusBar.currentHeight,
	},
});
