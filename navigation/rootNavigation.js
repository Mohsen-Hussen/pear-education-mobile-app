import React, { useRef } from "react";

export const navigationRef = useRef();

const navigate = (name, params) =>
	navigationRef.current?.navigate(name, params);

export default { navigate };
