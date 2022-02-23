import React from "react";
import { useFormikContext } from "formik";

import GeneralButton from "../General/GeneralButton";

function SubmitButton({ title }) {
	const { handleSubmit } = useFormikContext();

	return <GeneralButton title={title} onPress={handleSubmit} align="center" />;
}

export default SubmitButton;
