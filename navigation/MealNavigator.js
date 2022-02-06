import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import Colors from "../constant/colors";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen.js";
import FilterScreen from "../screens/FilterScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle:{
    fontFamily:'Roboto',
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitle: "A Screen",
};
const mealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    MealScreen: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MealTabConfig = {
  Meal: {
    screen: mealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInformation) => {
        return (
          <Ionicons
            name="ios-restaurant"
            size={25}
            color={tabInformation.tintColor}
          />
        );
      },
      tabBarColor: Colors.primaryColor,
      // tabBarLabel:'....<Text></Text>'
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "",
      tabBarIcon: (tabInformation) => {
        return (
          <Ionicons
            name="ios-star"
            size={25}
            color={tabInformation.tintColor}
          />
        );
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const MealsTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(MealTabConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(MealTabConfig, {
        tabBarOptions: {
          labelStyle:{
            fontFamily:'Roboto'
          },
          activeTintColor: Colors.accentColor,
        },
      });

const FiltersNavigator = createStackNavigator(
  { Filters: FilterScreen },
  {
    navigationOptions: {
      drawerLabel: "Filtreler",
    },
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold',
      },
      
    },
  },
  { drawerWidth: 300, drawerPosition: "right" }
);
export default createAppContainer(MainNavigator);
