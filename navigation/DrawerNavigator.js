import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import routes from "./routes";
import colors from "../config/pearColors";
import BottomTabsNavigator from "./BottomTabsNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Feed" component={BottomTabsNavigator} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
