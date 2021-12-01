import React from "react";
import { View, StyleSheet, Text, Button} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
const CategorieMeal = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Text> {selectedCategory.title} </Text>
      {/* <Button title="go sa" onPress={()=>props.navigation.navigate({routeName:'Categories'})}/> */}
      <Button
        title="GO BACK"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};
CategorieMeal.navigationOptions = (navigationData)=>{
  const catID = navigationData.navigation.getParam('categoryId');

  const selectedCategoryHeader = CATEGORIES.find((cat)=>cat.id ===catID);

  return {
    headerTitle : selectedCategoryHeader.title,
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategorieMeal;
