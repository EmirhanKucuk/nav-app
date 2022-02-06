import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
const CategorieMeal = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryId.indexOf(catId) >= 0
  );
  return <MealList  listData={displayedMeals} navigation={props.navigation} />;
};
CategorieMeal.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategoryHeader = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategoryHeader.title,
  };
};

export default CategorieMeal;
