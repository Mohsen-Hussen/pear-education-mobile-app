import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	ImageBackground,
	Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/pearColors";
import routes from "../../navigation/routes";
import { fetchDnsCourses } from "../../redux/dnsCoursesInfoSlice";

const windowHeight = Dimensions.get("window").height;

const CoursesFlatList = ({ navigation }) => {
	const dispatch = useDispatch();
	const globalState = useSelector((state) => state.dnsCoursesInfo);
	const coursesData = globalState.coursesData.DataResultsList;
	// console.log("data after dispatch", coursesData);
	useEffect(() => {
		dispatch(fetchDnsCourses());
	}, [])
	return (
		<View style={[styles.container]}>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={coursesData}
				keyExtractor={(item) => item.ID.toString()}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate(routes.COURSE_DETAILS, { itemID: item.id })
						}
					>
						<View style={[styles.TouchableOpacityContainer]}>
							<ImageBackground
								source={{ uri: "http://timeline.pearogram.com/customs/images/logo-time-line-2.png" }}
								resizeMode="cover"
								style={[styles.ImageBackgroundContainer]}
							>
								<View style={styles.overlayStyle}></View>
								<View style={styles.viewAlign}>
									<Text style={styles.textStyle}>{item.TeacherName}</Text>
									<Text style={styles.container}>
										<MaterialCommunityIcons
											name="clock-outline"
											size={18}
											color="#fff"
										/>
										<Text style={styles.fntSize}>
											{item.GroupName} - {item.GroupPath}
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
		color: colors.white,
		marginVertical: 7,
	},
	TouchableOpacityContainer: {
		margin: 10,
		width: 200,
	},
	ImageBackgroundContainer: {
		borderRadius: 10,
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
		height: windowHeight / 4.2,
	},
	overlayStyle: {
		position: "absolute",
		width: "100%",
		height: "100%",
		backgroundColor: colors.overlayColor,
	},
	viewAlign: {
		paddingHorizontal: 10,
	},
	textStyle: {
		fontSize: 22,
		fontWeight: "600",
		color: colors.white,
		marginVertical: 7,
	},
});
