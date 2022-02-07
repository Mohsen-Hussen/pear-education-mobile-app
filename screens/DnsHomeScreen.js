import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	StatusBar,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import colors from "../config/pearColors";
import DnsSearchBar from "../components/DnsHome/DnsSearchBar";

const DnsHomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<DnsSearchBar
				header="Find a perfect course for you"
				placeholder="Search a course"
			/>
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
});
