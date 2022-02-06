import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import routes from "./routes";
import colors from "../config/pearColors";

import PearHomeScreen from "../screens/PearHomeScreen";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="PearHomeScreen"
			screenOptions={{
				tabBarActiveTintColor: colors.black,
				tabBarInactiveTintColor: colors.inActive,
				tabBarStyle: {
					// position: "absolute",
					// justifyContent: "center",
					// alignItems: "center",
					// zIndex: 10,
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
		</Tab.Navigator>
	);
};

export default BottomTabsNavigator;

const styles = StyleSheet.create({});
