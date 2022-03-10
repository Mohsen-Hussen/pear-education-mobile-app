import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Screen from "../General/Screen";
import DrawerTab from "./DrawerTab";
import routes from "../../navigation/routes";
import { AntDesign } from "@expo/vector-icons";
import pearColors from "../../config/pearColors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../General/AppText";

const DrawerContent = ({ navigation }) => {
	return (
		<Screen style={{ justifyContent: "space-between" }}>
			<View>
				<View
					style={{
						alignItems: "center",
						justifyContent: "center",
						paddingBottom: 30,
					}}
				>
					<Image source={require("../../assets/splash.png")} />
				</View>
				<DrawerTab
					title="Home"
					onPress={() => navigation.navigate(routes.BOTTOM_TAPS_NAVIGATOR)}
				>
					<AntDesign name="home" size={30} color={pearColors.primary} />
				</DrawerTab>
				<DrawerTab
					title="Register"
					onPress={() => navigation.navigate(routes.REGISTER_SCREEN)}
				>
					<MaterialCommunityIcons
						name="account-plus"
						size={30}
						color={pearColors.primary}
					/>
				</DrawerTab>
				<DrawerTab
					title="Login"
					onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
				>
					<AntDesign name="login" size={30} color={pearColors.primary} />
				</DrawerTab>
			</View>
			<View
				style={{
					paddingBottom: 10,
				}}
			>
				<AppText color={pearColors.primary}>Copy Rights Pearogram</AppText>
			</View>
		</Screen>
	);
};

export default DrawerContent;

const styles = StyleSheet.create({});
