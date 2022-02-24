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
	fullName: Yup.string().required().label("Full Name"),
	email: Yup.string().email().required().label("Email"),
	school: Yup.string().required().min(4).label("School / Faculty Name"),
	parentPhone: Yup.string().matches(
		phoneRegExp,
		"Phone number is not valid, allowed ones 010, 011, 012, 015"
	),
	primary: Yup.string().min(4).label("Primary"),
	firstprimary: Yup.string().min(4).label("First Primary"),
});
const handleSubmit = (values, navigation) => {
	console.log(values);
	navigation.navigate(routes.LOGIN_SCREEN);
};

function RegisterSecond({ navigation }) {
	return (
		<Screen style={styles.container}>
			<ScrollView>
				<AppText size="20" align="center" Weight="bold">
					Sign Up as student
				</AppText>
				<CircleSteps
					firstHeader="Phone Number"
					secHeader="Profile"
					dotsColor={pearColors.primary}
				/>
				<AppForm
					initialValues={{
						fullName: "",
						email: "",
						school: "",
						parentPhone: "",
						primary: "",
						firstprimary: "",
					}}
					onSubmit={(values) => handleSubmit(values, navigation)}
					validationSchema={validationSchema}
				>
					<AppFormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="account"
						keyboardType="default"
						name="fullName"
						placeholder="Full Name"
					/>
					<AppFormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="email"
						keyboardType="default"
						name="email"
						placeholder="Email"
						textContentType="emailAddress"
					/>
					<AppFormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="school"
						name="school"
						placeholder="School / Faculty Name"
					/>
					<AppFormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="phone"
						keyboardType="numeric"
						name="parentPhone"
						placeholder="Parent Phone"
						textContentType="telephoneNumber"
					/>
					<AppFormField
						autoCapitalize="none"
						autoCorrect={false}
						name="primary"
						placeholder="Primary"
					/>
					<AppFormField
						autoCapitalize="none"
						autoCorrect={false}
						name="firstPrimary"
						placeholder="First Primary"
					/>

					<View style={{ alignItems: "center" }}>
						<SubmitButton color={pearColors.inActive} title="Finish !" />
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

export default RegisterSecond;
