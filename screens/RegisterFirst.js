import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import * as Yup from "yup";

import Screen from "../components/General/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppText from "../components/General/AppText";
import pearColors from "../config/pearColors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CircleSteps from "../components/RegisterPage/CircleSteps";
import routes from "../navigation/routes";
const phoneRegExp = /^01[0125][0-9]{8}$/;

const validationSchema = Yup.object().shape({
	phone: Yup.string().matches(
		phoneRegExp,
		"Phone number is not valid, allowed ones 010, 011, 012, 015"
	),
	username: Yup.string().required().label("Username"),
	password: Yup.string().required().min(4).label("Password"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "Passwords must match")
		.required()
		.label("ConfirmPassword"),
});
const handleSubmit = (values, navigation) => {
	console.log(values);
	navigation.navigate(routes.REGISTER_SECOND_SCREEN);
};

function RegisterFirst({ navigation }) {
	const [showPassword, setShowPassword] = useState(true);
	const [showConfirmPassword, setShowConfirmPassword] = useState(true);
	return (
		<Screen style={styles.container}>
			<ScrollView>
				<AppText size="20" align="center" Weight="bold">
					Sign Up as student
				</AppText>
				<CircleSteps
					firstHeader="Phone Number"
					secHeader="Profile"
					secCircleColor={pearColors.inActive}
				/>
				<AppForm
					initialValues={{
						phone: "",
						username: "",
						password: "",
						confirmPassword: "",
					}}
					onSubmit={(values) => handleSubmit(values, navigation)}
					validationSchema={validationSchema}
				>
					<AppFormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="phone"
						keyboardType="number-pad"
						name="phone"
						placeholder="phone number"
						textContentType="telephoneNumber"
					/>
					<AppFormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="account"
						keyboardType="default"
						name="username"
						placeholder="username"
						textContentType="username"
					/>
					<AppFormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="lock"
						name="password"
						placeholder="password"
						secureTextEntry={showPassword}
						textContentType="password"
					>
						<TouchableOpacity>
							<MaterialCommunityIcons
								name="eye"
								size={40}
								color={pearColors.primary}
								onPress={() => setShowPassword(!showPassword)}
							/>
						</TouchableOpacity>
					</AppFormField>
					<AppFormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="lock"
						name="confirmPassword"
						placeholder="confirm Password"
						secureTextEntry={showConfirmPassword}
						textContentType="password"
					>
						<TouchableOpacity>
							<MaterialCommunityIcons
								name="eye"
								size={40}
								color={pearColors.primary}
								onPress={() => setShowConfirmPassword(!showConfirmPassword)}
							/>
						</TouchableOpacity>
					</AppFormField>

					<View style={{ alignItems: "center" }}>
						<SubmitButton color={pearColors.inActive} title="Next" />
					</View>
					<AppText numberOfLines={2}>
						<AppText size="17" marginVertical={0}>
							By signing up, you agree to our
						</AppText>
						<AppText marginVertical={3} color={pearColors.primary}>
							{" "}
						</AppText>
						<TouchableOpacity>
							<AppText size="14" marginVertical={0} color={pearColors.primary}>
								Terms of Service{" "}
							</AppText>
						</TouchableOpacity>
						<AppText size="17" marginVertical={0}>
							And
						</AppText>
						<AppText marginVertical={3} color={pearColors.primary}>
							{" "}
						</AppText>
						<TouchableOpacity>
							<AppText size="14" marginVertical={0} color={pearColors.primary}>
								Privacy Policy
							</AppText>
						</TouchableOpacity>
					</AppText>

					<View
						style={{
							flex: 1,
							justifyContent: "flex-end",
							alignItems: "center",
						}}
					>
						<TouchableOpacity
							style={{ flexDirection: "row" }}
							onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
						>
							<AppText>I have an account ! </AppText>
							<AppText Weight="bold" color={pearColors.primary}>
								Login
							</AppText>
						</TouchableOpacity>
					</View>
				</AppForm>
			</ScrollView>
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

export default RegisterFirst;
