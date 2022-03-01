import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import routes from "./routes";
import colors from "../config/pearColors";

import PearHomeScreen from "../screens/PearHomeScreen";
import DnsHomeScreen from "../screens/DnsHomeScreen";
import InstructorDetails from "../screens/InstructorDetails";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="DnsHomeScreen"
			screenOptions={{
				tabBarShowLabel: false,

				tabBarActiveTintColor: colors.black,
				tabBarInactiveTintColor: colors.inActive,
				tabBarStyle: {
					backgroundColor: colors.light,
				},
				tabBarLabelStyle: {
					fontSize: 13,
				},
			}}
		>
			<Tab.Screen
				name="PearHomeScreen"
				component={PearHomeScreen}
				options={({ navigation }) => ({
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="home"
							color={color}
							size={35}
							onPress={() => navigation.navigate(routes.PEAR_HOME_SCREEN)}
						/>
					),
					title: "Home",
					headerTitleAlign: "center",
				})}
			/>
			<Tab.Screen
				name="DnsHomeScreen"
				component={DnsHomeScreen}
				options={({ navigation }) => ({
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="home"
							color={color}
							size={35}
							onPress={() => navigation.navigate(routes.DNS_HOME_SCREEN)}
						/>
					),
					title: "Home",
					headerTitleAlign: "center",
				})}
			/>
			<Tab.Screen
				name="InstructorDetails"
				component={InstructorDetails}
				options={({ navigation }) => ({
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="account"
							color={color}
							size={35}
							onPress={() => navigation.navigate(routes.INSTRUCTORDETAILS)}
						/>
					),
					title: "InstructorDetails",
					headerTitleAlign: "center",
				})}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabsNavigator;

const styles = StyleSheet.create({});
