import React from "react";
import { useSelector } from "react-redux";
import {
	StyleSheet,
	View,
	FlatList,
	Image,
	Dimensions,
} from "react-native";
import StarRating from "react-native-star-rating";
import AppText from "../General/AppText";
import colors from "../../config/pearColors";

const windowWidth = Dimensions.get("window").width;

// rating library that i used
// https://www.npmjs.com/package/react-native-ratings
//https://github.com/Monte9/react-native-ratings

const FeedbackFlatList = () => {
	const globalState = useSelector((state) => state.courseFeedback);
	const ratingData = globalState.ratingData;

	return (
		<View style={styles.sliderContainer}>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={ratingData}
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
								disabled={true}
								maxStars={5}
								emptyStar={"star-o"}
								fullStar={"star"}
								halfStar={"star-half-o"}
								iconSet={"FontAwesome"}
								fullStarColor={"#89A71A"}
								starSize={30}
								rating={item.rating}
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
		borderRadius: 50,
	},
	textContainer: {
		paddingHorizontal: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});
