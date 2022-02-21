import React from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	ImageBackground,
	useWindowDimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/pearColors";

const coursesData = [
	{
		id: 1,
		uri: require("../../assets/pearImages/2.png"),
		title: "Advanced - UI/UX Design",
		duration: "2h 30min",
		price: "120$",
		name: "Ahmed Selem",
	},
	{
		id: 2,
		uri: require("../../assets/pearImages/5.png"),
		title: "Advanced - UI/UX Design",
		duration: "2h 30min",
		price: "120$",
		name: "Ahmed Selem",
	},
	{
		id: 3,
		uri: require("../../assets/pearImages/8.png"),
		title: "Advanced - UI/UX Design",
		duration: "2h 30min",
		price: "120$",
		name: "Ahmed Selem",
	},
	{
		id: 4,
		uri: require("../../assets/pearImages/2.png"),
		title: "Advanced - UI/UX Design",
		duration: "2h 30min",
		price: "120$",
		name: "Ahmed Selem",
	},
	{
		id: 5,
		uri: require("../../assets/pearImages/5.png"),
		title: "Advanced - UI/UX Design",
		duration: "2h 30min",
		price: "120$",
		name: "Ahmed Selem",
	},
	{
		id: 6,
		uri: require("../../assets/pearImages/8.png"),
		title: "Advanced - UI/UX Design",
		duration: "2h 30min",
		price: "120$",
		name: "Ahmed Selem",
	},
];

const CoursesFlatList = () => {
	const window = useWindowDimensions();

	return (
		<View style={styles.container}>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={coursesData}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<TouchableOpacity>
						<View
							style={[
								styles.TouchableOpacityContainer,
								{ height: window.height / 3 },
							]}
						>
							<ImageBackground
								source={item.uri}
								resizeMode="cover"
								style={[
									styles.ImageBackgroundContainer,
									{ height: window.height / 4 },
								]}
							>
								<View style={styles.viewAlign}>
									<Text style={styles.textStyle}>{item.title}</Text>
									<Text style={styles.container}>
										<MaterialCommunityIcons
											name="clock-outline"
											size={15}
											color="black"
										/>
										<Text style={styles.fntSize}>
											{item.duration} - {item.price}
										</Text>
									</Text>
									<Text style={styles.fntSize}>{item.name}</Text>
								</View>
							</ImageBackground>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

export default CoursesFlatList;

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},
	fntSize: {
		fontSize: 18,
	},
	TouchableOpacityContainer: {
		margin: 10,
		width: 200,
	},
	ImageBackgroundContainer: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	viewAlign: {
		paddingHorizontal: 10,
	},
	textStyle: {
		fontSize: 22,
		fontWeight: "600",
	},
});
