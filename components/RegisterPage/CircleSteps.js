import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../General/AppText";
import pearColors from "../../config/pearColors";
const CircleSteps = ({
	firstCircleText = "1",
	firstHeader = "firstHeader",
	firstCircleColor = pearColors.primary,
	secCircleText = "2",
	secHeader = "secHeader",
	secCircleColor = pearColors.primary,
}) => {
	return (
		<View
			style={{
				width: "100%",
				height: 100,
				flexDirection: "row",
				marginVertical: 10,
				position: "relative",
			}}
		>
			<View
				style={{
					position: "absolute",
					left: "20%",
				}}
			>
				<AppText size="20" Weight="bold" color={pearColors.inActive}>
					- - - - - - - - - - - - - - -
				</AppText>
			</View>
			<View
				style={{
					width: "50%",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<View
					style={{
						width: 50,
						height: 50,
						borderRadius: 50,
						backgroundColor: firstCircleColor,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<AppText Weight="bold" color="#fff" size="25">
						{firstCircleText}
					</AppText>
				</View>
				<AppText size="14">{firstHeader}</AppText>
			</View>
			<View
				style={{
					width: "50%",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<View
					style={{
						width: 50,
						height: 50,
						borderRadius: 50,
						backgroundColor: secCircleColor,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<AppText Weight="bold" color="#fff" size="25">
						{secCircleText}
					</AppText>
				</View>
				<AppText size="14">{secHeader}</AppText>
			</View>
		</View>
	);
};

export default CircleSteps;

const styles = StyleSheet.create({});
