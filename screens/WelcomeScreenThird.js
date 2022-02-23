import React from "react";
import {
	SafeAreaView,
	Text,
	View,
	StatusBar,
	StyleSheet,
	Image,
	Button,
} from "react-native";
import GeneralButton from "../components/General/GeneralButton";
import AppText from "../components/General/AppText";
import pearColors from "../config/pearColors";
import SliderDots from "../components/General/SliderDots";
import routes from "../navigation/routes";
import AppSettings from "../config/AppSettings";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GetStartedGandle = async ({ navigation }) => {
	try {
		// 1- Local Storage
		await AsyncStorage.setItem("isFirstTime", JSON.stringify(false));
		// 2- Navigate
		if (AppSettings.ISDNS) {
			navigation.navigate(routes.DNS_HOME_SCREEN);
		} else {
			navigation.navigate(routes.PEAR_HOME_SCREEN);
		}
	} catch (e) {
		// saving error
	}
};

function WelcomeScreenThird({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require("../assets/pearImages/asset-8.png")}
				style={{
					borderColor: "#000",
				}}
			/>
			<AppText align="center" size="30">
				Always Fascinated Learning
			</AppText>
			<AppText align="center">
				Always Keep in touch with your tutor & friends. let's get connected!
			</AppText>
			<SliderDots thirdWidth="40" thirdColor={pearColors.primary}></SliderDots>
			<GeneralButton
				title="Get Started"
				onPress={() => GetStartedGandle({ navigation })}
			></GeneralButton>
		</SafeAreaView>
	);
}

export default WelcomeScreenThird;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		paddingTop: StatusBar.currentHeight,
		justifyContent: "center",
		alignItems: "center",
	},
	DotsContainer: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: pearColors.danger,
	},
});
