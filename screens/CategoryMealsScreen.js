import React from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
const CategorieMeal = (props) => {
  const catId = props.navigation.getParam("categoryId");


  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        imageURL={itemData.item.imageURL}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryId.indexOf(catId) >= 0
  );
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};
CategorieMeal.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategoryHeader = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategoryHeader.title,
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
