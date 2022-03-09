import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import routes from "./routes";
import colors from "../config/pearColors";

import PearHomeScreen from "../screens/PearHomeScreen";
import DnsHomeScreen from "../screens/DnsHomeScreen";
import InstructorDetails from "../screens/InstructorDetails";
import AppSettings from "../config/AppSettings";
import TeachersScreen from "../screens/TeachersScreen";
import CourseCardsListScreen from "../screens/CourseCardsListScreen";
import StackNavigation from "./StackNavigation";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
	const [isLogged, setIsLogged] = useState(false);
	// const SelectHome = () => {
	// 	if (AppSettings.ISDNS) {
	// 		return (
	// 			<Tab.Screen
	// 				name="DnsHomeScreen"
	// 				component={StackNavigation}
	// 				options={({ navigation }) => ({
	// 					tabBarIcon: ({ color, size }) => (
	// 						<MaterialCommunityIcons
	// 							name="home"
	// 							color={color}
	// 							size={35}
	// 							onPress={() => navigation.navigate(routes.DNS_HOME_SCREEN)}
	// 						/>
	// 					),
	// 					title: "Home",
	// 					headerTitleAlign: "center",
	// 				})}
	// 			/>
	// 		);
	// 	} else {
	// 		return (
	// 			<Tab.Screen
	// 				name="PearHomeScreen"
	// 				component={StackNavigation}
	// 				options={({ navigation }) => ({
	// 					tabBarIcon: ({ color, size }) => (
	// 						<MaterialCommunityIcons
	// 							name="home"
	// 							color={color}
	// 							size={35}
	// 							onPress={() => navigation.navigate(routes.PEAR_HOME_SCREEN)}
	// 						/>
	// 					),
	// 					title: "Home",
	// 					headerTitleAlign: "center",
	// 				})}
	// 			/>
	// 		);
	// 	}
	// };
	const rendedTabs = () => {
		const TeachersScreenTitle = AppSettings.ISDNS ? "Instructors" : "Teachers";
		const CoursesScreenTitle = AppSettings.ISDNS ? "Courses" : "Lessons";
		if (!isLogged) {
			return (
				<>
					<Tab.Screen
						name="StackNavigation"
						component={StackNavigation}
						options={({ navigation }) => ({
							tabBarIcon: ({ color, size }) => (
								<MaterialCommunityIcons
									name="home"
									color={color}
									size={35}
									onPress={() => navigation.navigate(routes.STACK_NAVIGATION)}
								/>
							),
							title: "Home",
							headerTitleAlign: "center",
						})}
					/>
					{/* {SelectHome()} */}
					<Tab.Screen
						name="TeachersScreen"
						component={TeachersScreen}
						options={({ navigation }) => ({
							tabBarIcon: ({ color, size }) => (
								<MaterialCommunityIcons
									name="nature-people"
									color={color}
									size={35}
									onPress={() => navigation.navigate(routes.TEACHERS_SCREEN)}
								/>
							),
							title: TeachersScreenTitle,
							headerTitleAlign: "center",
						})}
					/>
					<Tab.Screen
						name="CoursesScreen"
						component={CourseCardsListScreen}
						options={({ navigation }) => ({
							tabBarIcon: ({ color, size }) => (
								<MaterialCommunityIcons
									name="microsoft-onenote"
									color={color}
									size={35}
									onPress={() => navigation.navigate(routes.COURSES_SCREEN)}
								/>
							),
							title: CoursesScreenTitle,
							headerTitleAlign: "center",
						})}
					/>
				</>
			);
		} else {
			return (
				<>
					<Tab.Screen
						name="StackNavigation"
						component={StackNavigation}
						options={({ navigation }) => ({
							tabBarIcon: ({ color, size }) => (
								<MaterialCommunityIcons
									name="home"
									color={color}
									size={35}
									onPress={() => navigation.navigate(routes.STACK_NAVIGATION)}
								/>
							),
							title: "Home",
							headerTitleAlign: "center",
						})}
					/>
				</>
			);
		}
	};
	return (
		<Tab.Navigator
			// screenOptions={{  }}
			initialRouteName="DnsHomeScreen"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: true,
				tabBarActiveTintColor: colors.primary,
				tabBarInactiveTintColor: colors.inActive,
				tabBarStyle: {
					backgroundColor: colors.light,
				},
				tabBarLabelStyle: {
					fontSize: 13,
				},
			}}
		>
			{rendedTabs()}
		</Tab.Navigator>
	);
};

export default BottomTabsNavigator;

const styles = StyleSheet.create({});
