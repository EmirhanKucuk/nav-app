import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/CategoryMealsScreen";

import { createAppContainer } from "react-navigation";

const mealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  MealScreen: CategoryMealsScreen,
  MealDetail: MealDetailScreen,
});

export default createAppContainer(mealsNavigator);
