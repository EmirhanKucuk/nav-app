import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealHeader, ...styles.mealRow }}>
            <ImageBackground
              source={{ uri: props.imageURL }}
              style={styles.bgImage}
            >
              <Text style={styles.title}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealDetail, ...styles.mealRow }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    padding:20,
    borderRadius:20,
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
  },
  mealRow: {
    flexDirection: "row",
    backgroundColor:'wheat'
  },
  mealHeader: {
    height: "89%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  title:{
    fontFamily:'open-sans-bold',
    fontSize:22,
    color:'white',
    backgroundColor:'rgba(0,0,0,0.6)',
    paddingVertical:5,
    paddingHorizontal:12,
    textAlign:'center'
  },    
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent:'flex-end'
  },
});

export default MealItem;
