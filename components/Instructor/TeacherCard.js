import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import StarRating from "react-native-star-rating";
import colors from "../../config/pearColors";
import AppText from "../General/AppText";
import { AntDesign } from "@expo/vector-icons";
import routes from "../../navigation/routes";

const windowHeight = Dimensions.get("window").height;

const TeacherCard = ({
  ID,
  imgSource,
  teacherName,
  subjects,
  numOfStudents,
  numOfCourses,
  rating,
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(routes.INSTRUCTOR_DETAILS, {
            itemID: ID,
          })
        }
      >
        <View style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.imageCardStyle} source={imgSource} />
          </View>
          <View style={styles.textCardContainer}>
            <AppText size={20} color={colors.black} marginVertical={2} Weight="bold">
              {teacherName}
            </AppText>
            <AppText
              size={17}
              color={colors.black}
              marginVertical={2}
            >
              Subject : {subjects}
            </AppText>
            <AppText size={13} color={colors.black} marginVertical={2}>
              Students : {numOfStudents}
            </AppText>
            <AppText size={13} color={colors.black} marginVertical={2}>
              Courses : {numOfCourses}
            </AppText>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 2 }}>
              <View style={{ marginHorizontal: 3 }}>
                <AppText size={13} color={colors.black} marginVertical={0}>
                  ({rating})
                </AppText>
              </View>
              <StarRating
                disabled={true}
                maxStars={5}
                emptyStar={"star-o"}
                fullStar={"star"}
                halfStar={"star-half-o"}
                iconSet={"FontAwesome"}
                fullStarColor={"#89A71A"}
                starSize={20}
                rating={rating}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TeacherCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 8,
  },
  imageContainer: {
    width: "35%",
    borderRadius: 10,
    overflow: "hidden",
  },
  imageCardStyle: {
    maxWidth: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textCardContainer: {
    width: "63%",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    padding: 8,
  },
  durationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
