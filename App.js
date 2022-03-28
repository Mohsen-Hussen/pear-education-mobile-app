import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import {
	StyleSheet,
	SafeAreaView,
	StatusBar,
	ScrollView,
	Alert,
	Text,
} from "react-native";
import store from "./redux/store";
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
import CourseCardsListScreen from "./screens/CourseCardsListScreen";
import CoursesIntroScreen from "./screens/CoursesIntroScreen";
import TeachersScreen from "./screens/TeachersScreen";
import StackNavigation from "./navigation/StackNavigation";
import DrawerNavigator from "./navigation/DrawerNavigator";


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
				<StackNavigation />
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

	// return (
	// 	<View style={styles.container}>
	// 		<Video
	// 			style={styles.video}
	// 			source={{
	// 				uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
	// 			}}
	// 			useNativeControls
	// 			resizeMode="contain"
	// 			isLooping
	// 		/>
	// 		<View style={styles.buttons}>

	// 		</View>
	// 	</View>
	// );



	return (
		<Provider store={store} >
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		</Provider>
	);

};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'red',
	},
	video: {
		alignSelf: 'center',
		width: "100%",
		height: "100%",
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
