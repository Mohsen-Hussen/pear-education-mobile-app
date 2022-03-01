import React from "react";
import { useFormikContext } from "formik";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

function AppBounceyCheckBox({ name, width = "100%", children, ...otherProps }) {
	const { setFieldTouched, setFieldValue, errors, touched, values } =
		useFormikContext();

	return (
		<View style={{ position: "relative" }}>
			<BouncyCheckbox
				onBlur={() => setFieldTouched(name)}
				onPress={(text) => setFieldValue(name, name)}
				value={values[name]}
				width={width}
				style={{ width: "100%" }}
				size={25}
				fillColor="red"
				unfillColor="#FFFFFF"
				text={name}
				iconStyle={{ borderColor: "red" }}
				{...otherProps}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />

			<View
				style={{
					position: "absolute",
					right: 10,
					top: 18,
				}}
			>
				{children}
			</View>
		</View>
	);
}

export default AppBounceyCheckBox;
