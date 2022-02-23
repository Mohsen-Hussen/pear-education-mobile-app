import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../General/AppText";

function ErrorMessage({ error, visible }) {
	if (!visible || !error) return null;

	return <AppText color="red">{error}</AppText>;
}

export default ErrorMessage;
