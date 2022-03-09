import { FlatList, StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import Screen from "../components/General/Screen";
import AppText from "../components/General/AppText";
import pearColors from "../config/pearColors";
import InstructorCard from "../components/Instructor/InstructorCard";
import CourseCard from "../components/Courses/CourseCard";
const courseData = [
	{
		id: 1,
		image: require("../assets/pearImages/all-course-1.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 2,
		image: require("../assets/pearImages/all-course-2.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 3,
		image: require("../assets/pearImages/all-course-3.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 4,
		image: require("../assets/pearImages/all-course-1.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 5,
		image: require("../assets/pearImages/all-course-2.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 6,
		image: require("../assets/pearImages/all-course-3.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 7,
		image: require("../assets/pearImages/all-course-1.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 8,
		image: require("../assets/pearImages/all-course-2.png"),
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
];
const Instructor = {
	imageUri: "https://reactjs.org/logo-og.png",
	InstructorName: "Dr. Ahmed Selem",
	InstructorPosition: "Developer and Lead Instructor",
	totalStudents: "874,487",
	Reviews: "120,021",
	AboutMe:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
};
const InstructorDetails = ({ route }) => {
	const selectedId = route.params.Id;
	const renderItems = () => {
		return courseData.map((item) => {
			return (
				<CourseCard
					key={item.id}
					imgSource={item.image}
					instractourName={item.instractourName}
					courseName={item.courseName}
					courseDescription={item.courseDescription}
					courseDutation={item.courseDutation}
				/>
			);
		});
	};
	return (
		<Screen style={{ backgroundColor: pearColors.light }}>
			<ScrollView>
				<AppText Weight="bold" size="20">
					Instructor Id = {selectedId}
				</AppText>
				<InstructorCard {...Instructor}></InstructorCard>
				<AppText Weight="bold" size="20">
					My Courses ({courseData.length})
				</AppText>
				<View style={{ flex: 1 }}>
					{renderItems()}
					{/* <FlatList
						data={courseData}
						keyExtractor={(item) => item.id.toString()}
						initialNumToRender={5}
						renderItem={({ item }) => (
							<CourseCard
								imgSource={item.image}
								instractourName={item.instractourName}
								courseName={item.courseName}
								courseDescription={item.courseDescription}
								courseDutation={item.courseDutation}
							/>
						)}
					/> */}
				</View>
			</ScrollView>
		</Screen>
	);
};

export default InstructorDetails;

const styles = StyleSheet.create({});
