import React from "react";
import {
	StyleSheet,
	Text,
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
						<View
							style={[
								styles.cardContainer,
								{ width: window.width / 1.5, height: window.height / 8 },
							]}
						>
							<Image source={item.image} style={styles.constractorAvatar} />
							<View style={styles.textContainer}>
								<AppText align="left" size="18">
									{item.title}
								</AppText>
								<AppText align="left" size="15">
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
		borderColor: colors.grayLight,
		borderWidth: 1,
		borderRadius: 5,
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: colors.light,
	},
	constractorAvatar: {
		height: "100%",
		width: "30%",
		maxWidth: "100%",
	},
	textContainer: {
		paddingHorizontal: 10,
	},
});
