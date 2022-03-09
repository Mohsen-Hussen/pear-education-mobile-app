import React, { useState } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	TouchableOpacity,
	Image,
	Dimensions,
} from "react-native";
import StarRating from "react-native-star-rating";
import AppText from "../General/AppText";
import colors from "../../config/pearColors";

const windowWidth = Dimensions.get("window").width;

const instractourData = [
	{
		id: 1,
		image: require("../../assets/pearImages/teacher_Default.png"),
		title: "Student 1",
		opnion:
			"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
		rating: 2,
	},
	{
		id: 2,
		image: require("../../assets/pearImages/stu-parent-03.png"),
		title: "Student 2",
		opnion:
			"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
		rating: 3,
	},
	{
		id: 3,
		image: require("../../assets/pearImages/teacher_Default.png"),
		title: "Student 3",
		opnion:
			"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
		rating: 4,
	},
	{
		id: 4,
		image: require("../../assets/pearImages/stu-parent-03.png"),
		title: "Student 4",
		opnion:
			"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
		rating: 5,
	},
];
// https://www.npmjs.com/package/react-native-ratings
//https://github.com/Monte9/react-native-ratings

const FeedbackFlatList = () => {
	const [starCount, setStarCount] = useState(3);
	const onStarRatingPress = (rating) => {
		setStarCount(rating);
	};
	return (
		<View style={styles.sliderContainer}>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={instractourData}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<View style={styles.cardContainer}>
						<Image source={item.image} style={styles.constractorAvatar} />
						<View style={styles.textContainer}>
							<AppText align="left" size="18" color={colors.black}>
								{item.title}
							</AppText>
							<AppText align="left" size="15" color={colors.medium}>
								{item.opnion}
							</AppText>
							<StarRating
								disabled={false}
								maxStars={5}
								emptyStar={"star-o"}
								fullStar={"star"}
								halfStar={"star-half-o"}
								iconSet={"FontAwesome"}
								fullStarColor={"#89A71A"}
								starSize={30}
								rating={starCount}
								selectedStar={(rating) => {
									onStarRatingPress(rating);
									// console.log(rating);
									// console.log(typeof rating);
								}}
							/>
						</View>
					</View>
				)}
			/>
		</View>
	);
};

export default FeedbackFlatList;

const styles = StyleSheet.create({
	sliderContainer: {
		marginVertical: 10,
	},
	cardContainer: {
		margin: 10,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.white,
		padding: 15,
		width: windowWidth / 1.5,
	},
	constractorAvatar: {
		// height: "100%",
		// width: "30%",
		// maxWidth: "100%",
		borderRadius: 50,
		// resizeMode: "contain",
	},
	textContainer: {
		paddingHorizontal: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});
