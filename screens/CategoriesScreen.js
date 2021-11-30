import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Platform
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constant/colors";
const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItems}
        onPress={() => {
          props.navigation.navigate({ routeName: "MealScreen",params: {
            categoryId: itemData.item.id
          } });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    // <View style={styles.screen}>
    //   <Text>The Categories Screen</Text>
    //   <Button
    //     title="click me"
    //     onPress={() => console.log(props.navigation.navigate({routeName:'MealScreen'}))}
    //   />
    //   {/* <Button
    //     title="go to mealDetail"
    //     onPress={() => console.log(props.navigation.navigate({routeName:'MealDetail'}))}
    //   /> */}
    // </View>
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};
  CategoriesScreen.navigationOptions={
    headerTitle:'Meal Categories',
    headerStyle:{
      backgroundColor: Platform.OS==='android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS==='android'? 'white' : Colors.primaryColor
  }
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItems: {
    flex: 1,
    borderColor:'red',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
