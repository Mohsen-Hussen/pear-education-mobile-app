import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../../config/pearColors";

const SearchFilterBar = ({
  placeholder,
  placeholderColor,
  searchIconName,
  searchIconsize,
  searchIconColor,
  compassIconName,
  compassIconSize,
  compassIconColor,
  filterIconName,
  filterIconSize,
  filterIconColor,
  onPress,
}) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.wrapperContainer}>
      <View style={styles.searchInputContainer}>
        <AntDesign
          name={searchIconName}
          size={searchIconsize}
          style={{ color: colors[searchIconColor] }}
        />
        <TextInput
          placeholder={placeholder}
          onChangeText={(text) => {
            setText(text);
          }}
          value={text}
          placeholderTextColor={colors[placeholderColor]}
          style={styles.input}
        />
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log("compass icon tapped");
            console.log(text);
          }}
        >
          <View style={styles.filterIconStyle}>
            <AntDesign
              name={compassIconName}
              size={compassIconSize}
              style={{ color: colors[compassIconColor] }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
        >
          <View style={styles.filterIconStyle}>
            <FontAwesome5
              name={filterIconName}
              size={filterIconSize}
              style={{ color: colors[filterIconColor] }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View >
  );
};

export default SearchFilterBar;

const styles = StyleSheet.create({
  text: {
    width: "100%",
    marginBottom: 20,
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "600",
    color: colors.gray,
  },
  wrapperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchInputContainer: {
    flexDirection: "row",
    width: "70%",
    borderRadius: 8,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 5,
    marginHorizontal: 10,
    fontSize: 22,
  },
  iconsContainer: {
    width: "28%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  filterIconStyle: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
  },
});
