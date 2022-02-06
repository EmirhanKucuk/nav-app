import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  return <MealList navigation={props.navigation} listData={favMeals} />;
};
FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorites"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.openDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
