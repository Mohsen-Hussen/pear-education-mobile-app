import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import * as Yup from "yup";

import Screen from "../components/General/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppText from "../components/General/AppText";
import pearColors from "../config/pearColors";
import SignWith from "../components/LoginPage/SignWith";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
	return (
		<Screen style={styles.container}>
			<AppText align="center" Weight="bold">
				Login in To Your Education Account
			</AppText>
			<SignWith Text="sign with Google">
				<Image
					style={styles.Image}
					source={require("../assets/GmailIcon.png")}
				></Image>
			</SignWith>
			<SignWith Text="sign with Google">
				<Image
					style={styles.Image}
					source={require("../assets/facebook.png")}
				></Image>
			</SignWith>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<View
					style={{
						width: "40%",
						backgroundColor: "black",
						height: 2,
						marginHorizontal: 5,
					}}
				></View>
				<AppText>OR</AppText>
				<View
					style={{
						width: "40%",
						backgroundColor: "black",
						height: 2,
						marginHorizontal: 5,
					}}
				></View>
			</View>

			<AppForm
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="email"
					keyboardType="email-address"
					name="email"
					placeholder="Email"
					textContentType="emailAddress"
				/>
				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="lock"
					name="password"
					placeholder="Password"
					secureTextEntry
					textContentType="password"
				/>
				<View style={{ alignItems: "center" }}>
					<SubmitButton title="Login" />
					<TouchableOpacity>
						<AppText>Forget Password ?</AppText>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={{
						flex: 1,
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					<View style={{ flexDirection: "row" }}>
						<AppText>Don't have an account ?</AppText>
						<AppText>Register</AppText>
					</View>
				</TouchableOpacity>
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
	},
	Image: { width: 40, height: 40, resizeMode: "cover", marginHorizontal: 20 },
});

export default LoginScreen;
