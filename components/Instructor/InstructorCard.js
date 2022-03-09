import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppText from "../General/AppText";
import pearColors from "../../config/pearColors";

const InstructorCard = ({
	imageUri,
	InstructorName,
	InstructorPosition,
	totalStudents,
	Reviews,
	AboutMe,
}) => {
	const [showMore, setShowMore] = useState(false);
	const renredShowMore = () => {
		if (!showMore) {
			return "Show More";
		} else {
			return "Show Less";
		}
	};

	return (
		<>
			<View
				style={{
					flexDirection: "row",
					height: 100,
					width: "100%",
				}}
			>
				<View
					style={{
						width: "28%",
						justifyContent: "center",
					}}
				>
					<Image
						style={{ borderRadius: 50, width: 80, height: 80 }}
						source={{ uri: imageUri }}

						// source={{ uri: "assetspearImages/stu-parent-03.png" }}
						// source={{ uri: "assets/pearImages/stu-parent-03.png" }}
					/>
				</View>
				<View
					style={{
						width: "100%",
						justifyContent: "center",
					}}
				>
					<AppText marginVertical={3} Weight="bold">
						{InstructorName}
					</AppText>
					<AppText color={pearColors.inActive} marginVertical={3} size="14">
						{InstructorPosition}
					</AppText>
				</View>
			</View>
			<View
				style={{
					flexDirection: "row",
					height: 100,
					width: "100%",
					height: 60,
				}}
			>
				<View
					style={{
						width: "30%",
						justifyContent: "center",
					}}
				>
					<AppText color={pearColors.inActive} marginVertical={3} size="14">
						Total Student
					</AppText>
					<AppText marginVertical={3} Weight="bold">
						{totalStudents}
					</AppText>
				</View>
				<View
					style={{
						width: "30%",
						justifyContent: "center",
					}}
				>
					<AppText color={pearColors.inActive} marginVertical={3} size="14">
						Reviews
					</AppText>
					<AppText marginVertical={3} Weight="bold">
						{Reviews}
					</AppText>
				</View>
			</View>
			<View>
				<AppText marginVertical={15} Weight="bold" size="20">
					About Me
				</AppText>

				<AppText
					{...(!showMore ? { numberOfLines: 3 } : {})}
					marginVertical={5}
					color={pearColors.inActive}
					size="16"
				>
					{AboutMe}
				</AppText>
				<TouchableOpacity onPress={() => setShowMore(!showMore)}>
					<AppText marginVertical={0} color={pearColors.primary}>
						{renredShowMore()}
					</AppText>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default InstructorCard;

const styles = StyleSheet.create({});
