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

function WelcomeScreenSecond({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require("../assets/pearImages/asset-8.png")}
				style={{
					borderColor: "#000",
				}}
			/>
			<AppText align="center" size="30">
				Connect with Everyone
			</AppText>
			<AppText align="center">
				Always Keep in touch with your tutor & friends. let's get connected!
			</AppText>
			<SliderDots
				secondWidth="40"
				secondColor={pearColors.primary}
			></SliderDots>
			<GeneralButton
				title="Next"
				onPress={() => navigation.navigate(routes.WELCOME_THIRD_SCREEN)}
			></GeneralButton>
		</SafeAreaView>
	);
}

export default WelcomeScreenSecond;
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
