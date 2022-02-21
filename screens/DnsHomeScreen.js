import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	StatusBar,
	FlatList,
	ImageBackground,
	TouchableOpacity,
	Dimensions,
	Image,
	useWindowDimensions,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import colors from "../config/pearColors";
import DnsSearchBar from "../components/DnsHome/DnsSearchBar";
import CoursesFlatList from "../components/DnsHome/CoursesFlatList";
import InstractourFlatList from "../components/DnsHome/InstractourFlatList";

const Tab = createMaterialTopTabNavigator();

const DnsHomeScreen = () => {
	const window = useWindowDimensions();

	return (
		<SafeAreaView style={styles.container}>
			<DnsSearchBar
				header="Find a perfect course for you"
				placeholder="Search a course"
			/>
			<Text style={styles.text}>All Categories</Text>
			<View
				style={{
					height: window.height / 3,
				}}
			>
				<Tab.Navigator
					screenOptions={{
						tabBarLabelStyle: { fontSize: 17 },
						tabBarIndicatorStyle: {
							backgroundColor: colors.primary,
							height: 7,
						},
						tabBarItemStyle: { width: 160 },
						tabBarScrollEnabled: true,
					}}
					sceneContainerStyle={{ backgroundColor: "white" }}
				>
					<Tab.Screen name="Hr" component={CoursesFlatList} />
					<Tab.Screen name="Design" component={CoursesFlatList} />
					<Tab.Screen name="Development" component={CoursesFlatList} />
					<Tab.Screen name="Marketing" component={CoursesFlatList} />
					<Tab.Screen name="Sales" component={CoursesFlatList} />
					<Tab.Screen name="DevOps" component={CoursesFlatList} />
				</Tab.Navigator>
			</View>
			<Text style={[styles.text, { marginTop: 0 }]}>Our Top Instractours</Text>
			{/* <InstractourFlatList /> */}
		</SafeAreaView>
	);
};

export default DnsHomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 20,
		paddingTop: StatusBar.currentHeight,
	},
	text: {
		width: "100%",
		marginTop: 20,
		marginBottom: 10,
		fontSize: 20,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		fontWeight: "600",
		color: colors.gray,
	},
});
