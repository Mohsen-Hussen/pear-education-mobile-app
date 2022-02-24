import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/General/Screen";
import AppText from "../components/General/AppText";
import pearColors from "../config/pearColors";

const InstructorDetails = () => {
	return (
		<Screen style={{ backgroundColor: pearColors.light }}>
			<View
				style={{
					flexDirection: "row",
					height: 100,
					width: "100%",
				}}
			>
				<View
					style={{
						width: "25%",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Image
						style={{ borderRadius: 50, width: 80, height: 80 }}
						source={require("../assets/pearImages/stu-parent-03.png")}
					/>
				</View>
				<View
					style={{
						width: "100%",
						justifyContent: "center",
					}}
				>
					<AppText marginVertical={3} Weight="bold">
						Dr. Ahmed Selem
					</AppText>
					<AppText color={pearColors.inActive} marginVertical={3} size="14">
						Developer and Lead Instructor
					</AppText>
				</View>
			</View>
			<View
				style={{
					flexDirection: "row",
					height: 100,
					width: "100%",
				}}
			>
				<View
					style={{
						width: "30%",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<AppText color={pearColors.inActive} marginVertical={3} size="14">
						Total Student
					</AppText>
					<AppText marginVertical={3} Weight="bold">
						874,487
					</AppText>
				</View>
				<View
					style={{
						width: "30%",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<AppText color={pearColors.inActive} marginVertical={3} size="14">
						Reviews
					</AppText>
					<AppText marginVertical={3} Weight="bold">
						120,021
					</AppText>
				</View>
			</View>
			<Text>InstructorDetails</Text>
		</Screen>
	);
};

export default InstructorDetails;

const styles = StyleSheet.create({});
