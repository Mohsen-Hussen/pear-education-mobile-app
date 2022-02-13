import React from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Image,
} from "react-native";

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
	return (
		<View style={{ marginVertical: 10 }}>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={instractourData}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity>
						<View
							style={{
								margin: 10,
								width: 300,
								flexDirection: "row",
								borderColor: "#000",
								borderWidth: 2,
								borderRadius: 5,
								// justifyContent: "center",
								alignItems: "space-bettween",
							}}
						>
							<Image
								source={item.image}
								style={{
									borderColor: "#000",
									borderWidth: 2,
									borderRadius: 5,
								}}
							/>
							<View
								style={{
									paddingHorizontal: 10,
									justifyContent: "center",
									alignItems: "flex-end",
									borderColor: "#000",
									borderWidth: 2,
									borderRadius: 5,
								}}
							>
								<Text>{item.title}</Text>
								<Text>{item.subtitle}</Text>
							</View>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

export default InstractourFlatList;

const styles = StyleSheet.create({});
