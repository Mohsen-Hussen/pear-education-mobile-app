import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	StatusBar,
	useWindowDimensions,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import colors from "../config/pearColors";
import FilterBar from "../components/General/FilterBar";

import CoursesFlatList from "../components/DnsHome/CoursesFlatList";
import InstractourFlatList from "../components/DnsHome/InstractourFlatList";

const Tab = createMaterialTopTabNavigator();

const DnsHomeScreen = () => {
	const window = useWindowDimensions();

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>Find a perfect course for you</Text>
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
			<Text style={[styles.text, { marginTop: 20 }]}>All Categories</Text>
			<View
				style={{
					height: window.height / 3,
					flex: 1,
					// backgroundColor: colors.screenBackground,
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
					// sceneContainerStyle={{ backgroundColor: colors.screenBackground }}
				>
					<Tab.Screen name="Hr" component={CoursesFlatList} />
					<Tab.Screen name="Design" component={CoursesFlatList} />
					<Tab.Screen name="Development" component={CoursesFlatList} />
					<Tab.Screen name="Marketing" component={CoursesFlatList} />
					<Tab.Screen name="Sales" component={CoursesFlatList} />
					<Tab.Screen name="DevOps" component={CoursesFlatList} />
				</Tab.Navigator>
			</View>
			<Text style={styles.text}>Our Top Instractours</Text>
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
	text: {
		width: "100%",
		marginBottom: 20,
		fontSize: 21,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		fontWeight: "600",
		color: colors.gray,
	},
});
