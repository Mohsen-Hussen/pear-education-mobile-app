import React from "react";
import {
	StyleSheet,
	View,
	FlatList,
	TouchableOpacity,
	Image,
	useWindowDimensions,
} from "react-native";
import colors from "../../config/pearColors";
import AppText from "../General/AppText";

const instractourData = [
	{
		id: 1,
		image: require("../../assets/pearImages/teacher_Default.png"),
		title: "Dr/Ahmed Mokhtar",
		subtitle: "Hr Manager",
	},
	{
		id: 2,
		image: require("../../assets/pearImages/stu-parent-03.png"),
		title: "Dr/Ahmed Mokhtar",
		subtitle: "Hr Manager",
	},
	{
		id: 3,
		image: require("../../assets/pearImages/teacher_Default.png"),
		title: "Dr/Ahmed Mokhtar",
		subtitle: "Hr Manager",
	},
	{
		id: 4,
		image: require("../../assets/pearImages/stu-parent-03.png"),
		title: "Dr/Ahmed Mokhtar",
		subtitle: "Hr Manager",
	},
];

const InstractourFlatList = () => {
	const window = useWindowDimensions();

	return (
		<View style={styles.sliderContainer}>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={instractourData}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<TouchableOpacity>
						<View style={[styles.cardContainer, { width: window.width / 1.5 }]}>
							<Image source={item.image} style={styles.constractorAvatar} />
							<View style={styles.textContainer}>
								<AppText align="left" size="18" color={colors.black}>
									{item.title}
								</AppText>
								<AppText align="left" size="15" color={colors.medium}>
									{item.subtitle}
								</AppText>
							</View>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

export default InstractourFlatList;

const styles = StyleSheet.create({
	sliderContainer: { marginVertical: 10 },
	cardContainer: {
		margin: 10,
		width: 300,
		flexDirection: "row",
		borderRadius: 10,
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: colors.white,
		padding: 10,
	},
	constractorAvatar: {
		height: "100%",
		width: "30%",
		maxWidth: "100%",
		borderRadius: 10,
	},
	textContainer: {
		paddingHorizontal: 10,
	},
});
