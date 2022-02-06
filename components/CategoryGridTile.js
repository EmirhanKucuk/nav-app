import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItems}>
      <TouchableComponent onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};
const styles = StyleSheet.create({
  gridItems: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
  },
  container: {
    alignItems: "flex-end",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    shadowRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "right",
  },
});
export default CategoryGridTile;
