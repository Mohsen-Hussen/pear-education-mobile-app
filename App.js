import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	SafeAreaView,
	StatusBar,
	ScrollView,
	Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./navigation/BottomTabsNavigator";
import WelcomeStackNav from "./navigation/WelcomeStackNav";
import AppSettings from "./config/AppSettings";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginScreen from "./screens/LoginScreen";
import RegisterFirst from "./screens/RegisterFirst";
import CourseCard from "./components/Courses/CourseCard";
import CourseCardsList from "./screens/CourseCardsListScreen";

import RegisterSecond from "./screens/RegisterSecond";
import RegisterStackNav from "./navigation/RegisterStackNav";
import InstructorDetails from "./screens/InstructorDetails";
import CoursesIntroScreen from "./screens/CoursesIntroScreen";

const Render = () => {
	const [isFirstTime, setIsFirstTime] = useState();

	useEffect(() => {
		AsyncStorage.getItem("isFirstTime").then((token) => {
			if (token === null) {
				AsyncStorage.setItem("isFirstTime", JSON.stringify(true));
				setIsFirstTime(true);
			} else {
				setIsFirstTime(JSON.parse(token));
			}
		});
	}, []);

	if (isFirstTime) {
		return (
			<NavigationContainer>
				<StatusBar style="auto" />
				<WelcomeStackNav />
			</NavigationContainer>
		);
	} else {
		return (
			<NavigationContainer>
				<StatusBar style="auto" />
				<BottomTabsNavigator />
			</NavigationContainer>
		);
	}
};
const App = () => {
	// return <RegisterFirst />;
	// return <Render />;
	// return <LoginScreen />
	return (
		<>
			<StatusBar style="auto" />
			<CoursesIntroScreen />
			{/* <CourseCardsList /> */}
		</>
	);
	// return <InstructorDetails />;
	// return (
	// 	<NavigationContainer>
	// 		<RegisterStackNav />
	// 	</NavigationContainer>
	// );
	// return <RegisterSecond />;
	// return <Render />;
	// return <LoginScreen />;
};

export default App;
