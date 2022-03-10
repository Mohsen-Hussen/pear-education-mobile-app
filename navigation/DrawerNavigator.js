import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import routes from "./routes";
import colors from "../config/pearColors";
import BottomTabsNavigator from "./BottomTabsNavigator";
import RegisterFirst from "../screens/RegisterFirst";
import LoginScreen from "../screens/LoginScreen";
import DnsHomeScreen from "../screens/DnsHomeScreen";
import RegisterStackNav from "./RegisterStackNav";
import GeneralButton from "../components/General/GeneralButton";
import Screen from "../components/General/Screen";
import AppText from "../components/General/AppText";
import DrawerContent from "../components/DrawerNavigation/DrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			drawerContent={({ navigation }) => {
				return <DrawerContent navigation={navigation} />;
			}}
			screenOptions={{ headerShown: true }}
		>
			<Drawer.Screen
				name={routes.BOTTOM_TAPS_NAVIGATOR}
				component={BottomTabsNavigator}
			/>
			<Drawer.Screen
				name={routes.REGISTER_SCREEN}
				component={RegisterStackNav}
			/>

			<Drawer.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
