import React, { useState } from "react";
import {
	ScrollView,
	StyleSheet,
	FlatList,
	View,
	TouchableOpacity,
	Text,
	Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../config/pearColors";
import AppText from "../components/General/AppText";

import Screen from "../components/General/Screen";
import GeneralButton from "../components/General/GeneralButton";

const lessonsData = [
	{
		id: 1,
		title: "01.Introduction",
		subTitle: "Mentor:Ahmed Selem",
		duration: "5:12",
	},
	{
		id: 2,

		title: "02.Hello Friends",
		subTitle: "Mentor:Ahmed Selem",
		duration: "2:22",
	},
	{
		id: 3,
		title: "03.Questions",
		subTitle: "Mentor:Ahmed Selem",
		duration: "3:50",
	},
	{
		id: 4,
		title: "0.4.State",
		subTitle: "Mentor:Ahmed Selem",
		duration: "9:10",
	},
	{
		id: 5,
		title: "0.5.Props",
		subTitle: "Mentor:Ahmed Selem",
		duration: "1:20",
	},
	{
		id: 6,
		title: "0.6.Hooks",
		subTitle: "Mentor:Ahmed Selem",
		duration: "8:00",
	},
];
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CourseIntroLessonsTab = () => {
	const [isEnrolled, setIsEnrolled] = useState(true);
	return (
		<>
			{isEnrolled ? (
				<FlatList
					data={lessonsData}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={{ marginBottom: 15 }}
							onPress={() => console.log("video lesson tapped")}
						>
							<View style={styles.lessonContainer}>
								<View>
									<AntDesign name="play" size={45} color={colors.primary} />
								</View>
								<View
									style={{
										width: windowWidth / 1.9,
									}}
								>
									<AppText
										size={21}
										Weight="bold"
										marginVertical={0}
										color={colors.black}
									>
										{item.title}
									</AppText>
									<AppText size={15} marginVertical={0} color={colors.medium}>
										{item.subTitle}
									</AppText>
									<View style={styles.lessonDivider}></View>
								</View>
								<View>
									<AppText size={15} marginVertical={0} color={colors.medium}>
										{item.duration}
									</AppText>
								</View>
							</View>
						</TouchableOpacity>
					)}
				/>
			) : (
				<FlatList
					data={lessonsData}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<View style={styles.lessonContainer}>
							<View style={styles.lockIconContainer}>
								<FontAwesome5 name="lock" size={30} color={colors.medium} />
							</View>
							<View
								style={{
									width: windowWidth / 1.9,
								}}
							>
								<AppText
									size={21}
									Weight="bold"
									marginVertical={0}
									color={colors.medium}
								>
									{item.title}
								</AppText>
								<AppText size={15} marginVertical={0} color={colors.medium}>
									{item.subTitle}
								</AppText>
								<View
									style={[
										styles.lessonDivider,
										{ backgroundColor: colors.medium },
									]}
								></View>
							</View>
							<View>
								<AppText size={15} marginVertical={0} color={colors.medium}>
									{item.duration}
								</AppText>
							</View>
						</View>
					)}
				/>
			)}

			<View
				style={{
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<GeneralButton
					title="Enroll Now"
					onPress={() => console.log("enroll now button tapped")}
				/>
			</View>
		</>
	);
};

export default CourseIntroLessonsTab;

const styles = StyleSheet.create({
	lessonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	lessonDivider: {
		width: "100%",
		height: 5,
		backgroundColor: colors.primary,
		borderRadius: 10,
		marginBottom: 20,
	},
	lockIconContainer: {
		backgroundColor: colors.lessonsLock,
		padding: 10,
		width: 60,
		height: 60,
		borderRadius: 30,
		justifyContent: "center",
		alignItems: "center",
	},
});
