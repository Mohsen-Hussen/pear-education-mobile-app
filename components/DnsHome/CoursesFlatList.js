import React from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const coursesData = [
	{
		id: 1,
		image: {
			uri: "../assets/pearImages/2.png",
		},
		title: "Advanced - UI/UX Design",
		duration: "2h 30min",
		price: "120$",
		name: "Ahmed Selem",
	},
	{
		id: 2,
		image: {
			uri: "../assets/pearImages/5.png",
		},
		title: "Advanced - UI/UX Design",
		duration: "2h 30min",
		price: "120$",
		name: "Ahmed Selem",
	},
	{
		id: 3,
		image: {
			uri: "../assets/pearImages/8.png",
		},
		title: "Advanced - UI/UX Design",
		duration: "2h 30min",
		price: "120$",
		name: "Ahmed Selem",
	},
	{
		id: 4,
		image: {
			uri: "../assets/pearImages/2.png",
		},
		title: "Advanced - UI/UX Design",
		duration: "2h 30min",
		price: "120$",
		name: "Ahmed Selem",
	},
	{
		id: 5,
		image: {
			uri: "../assets/pearImages/5.png",
		},
		title: "Advanced - UI/UX Design",
		duration: "2h 30min",
		price: "120$",
		name: "Ahmed Selem",
	},
	{
		id: 6,
		image: {
			uri: "../assets/pearImages/8.png",
		},
		title: "Advanced - UI/UX Design",
		duration: "2h 30min",
		price: "120$",
		name: "Ahmed Selem",
	},
];

const CoursesFlatList = () => {
	return (
		<View style={{ marginVertical: 10 }}>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={coursesData}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity>
						<View style={{ margin: 10, width: 200, height: 200 }}>
							<ImageBackground
								source={item.image}
								resizeMode="cover"
								style={{
									borderColor: "#000",
									borderWidth: 2,
									borderRadius: 5,
								}}
							>
								<View
									style={{
										paddingHorizontal: 10,
										marginVertical: "30%",
									}}
								>
									<Text>{item.title}</Text>
									<Text style={{ marginVertical: 10 }}>
										<MaterialCommunityIcons
											name="clock-outline"
											size={15}
											color="black"
										/>
										{item.duration} - {item.price}
									</Text>
									<Text>{item.name}</Text>
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

const styles = StyleSheet.create({});
