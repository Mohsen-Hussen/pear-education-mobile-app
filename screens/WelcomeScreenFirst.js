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

function WelcomeScreenFirst({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require("../assets/pearImages/asset-8.png")}
				style={{
					borderColor: "#000",
				}}
			/>
			<AppText align="center" size="30">
				First See Learning
			</AppText>
			<AppText align="center">
				Forget about a far of paper all knowledge in one learning !
			</AppText>
			<SliderDots FirstWidth="40" FistColor={pearColors.primary}></SliderDots>
			<GeneralButton
				title="Next"
				onPress={() => navigation.navigate(routes.WELCOME_SECOND_SCREEN)}
			></GeneralButton>
		</SafeAreaView>
	);
}

export default WelcomeScreenFirst;
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
