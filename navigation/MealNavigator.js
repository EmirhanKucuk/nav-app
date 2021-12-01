import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/CategoryMealsScreen";
import { Platform } from "react-native";
import Colors from "../constant/colors";
import { createAppContainer } from "react-navigation";

const mealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    MealScreen: {
      screen: CategoryMealsScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(mealsNavigator);
