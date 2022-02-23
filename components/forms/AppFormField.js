import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

function AppFormField({ name, width = "100%", children, ...otherProps }) {
	const { setFieldTouched, setFieldValue, errors, touched, values } =
		useFormikContext();

	return (
		<View style={{ position: "relative" }}>
			<AppTextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={(text) => setFieldValue(name, text)}
				value={values[name]}
				width={width}
				style={{ width: "100%" }}
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

export default AppFormField;
