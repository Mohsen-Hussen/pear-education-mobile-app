import React from "react";
import { useFormikContext } from "formik";

import GeneralButton from "../General/GeneralButton";

function SubmitButton({ title, color }) {
	const { handleSubmit } = useFormikContext();

	return (
		<GeneralButton
			color={color}
			title={title}
			onPress={handleSubmit}
			align="center"
		/>
	);
}

export default SubmitButton;
