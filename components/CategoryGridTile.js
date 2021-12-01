import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.gridItems} onPress={props.onSelect}>
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  gridItems: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "flex-end",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    shadowRadius: 10,
    padding:10,
    justifyContent:'flex-end',

  },
});
export default CategoryGridTile;
