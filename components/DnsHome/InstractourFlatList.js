import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	StyleSheet,
	View,
	FlatList,
	TouchableOpacity,
	Image,
	Dimensions,
} from "react-native";
import colors from "../../config/pearColors";
import routes from "../../navigation/routes";
import AppText from "../General/AppText";
import { fetchInstractourInfo } from "../../redux/instractourInfoSlice";

const windowWidth = Dimensions.get("window").width;

const InstractourFlatList = ({ navigation }) => {
	const dispatch = useDispatch();
	const globalState = useSelector((state) => state.instractourInfo);
	const instractourData = globalState.instractourData;
	useEffect(() => {
		dispatch(fetchInstractourInfo());
	}, [dispatch])
	console.log(instractourData.length)

	return (
		<View style={styles.sliderContainer}>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={instractourData}
				keyExtractor={(item) => item.ID.toString()}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate(routes.INSTRUCTOR_DETAILS, { Id: item.ID })
						}
					>
						<View style={styles.cardContainer}>
							<Image
								style={{ borderRadius: 50, width: 80, height: 80 }}
								source={{ uri: "https://reactjs.org/logo-og.png" }}
							// source={item.Img}
							// style={styles.constractorAvatar}
							/>
							<View style={styles.textContainer}>
								<AppText align="left" size="18" color={colors.black}>
									{item.Name}
								</AppText>
								<AppText align="left" size="15" color={colors.medium}>
									{item.SchoolName}
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
	sliderContainer: {
		marginVertical: 10,
	},
	cardContainer: {
		margin: 10,
		flexDirection: "row",
		borderRadius: 10,
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: colors.white,
		padding: 8,
		width: windowWidth / 1.5,
	},
	constractorAvatar: {
		height: "100%",
		width: "30%",
		maxWidth: "100%",
		borderRadius: 8,
		resizeMode: "contain",
	},
	textContainer: {
		paddingHorizontal: 10,
	},
});
