import React, { useCallback } from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { EvilIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CustomHeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/actions/mealActions";
const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const meals = useSelector((state) => state.meals.meals);
  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  const selectedMeal = meals.find((meal) => meal.id === mealId);
  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);
  //useEffect works after the component has been rendered
  useEffect(() => {
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler,
    });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavorite });
  }, [currentMealIsFavorite]);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageURL }} style={styles.image} />
      <Text style={styles.title}>Ingredients</Text>
      <View>
        {selectedMeal.ingredients.map((items) => (
          <Text style={styles.text} key={items}>
            {items}
          </Text>
        ))}
        {/* <Button
        title="Go Back"
        onPress={() => {
          props.navigation.pop();
        }}
      /> */}
      </View>
      <Text style={styles.title}>Steps</Text>
      <View>
        {selectedMeal.steps.map((steps) => (
          <Text style={styles.text} key={steps}>
            {steps}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  // const selectedMeal = meals.find((meal) => meal.id === mealId);
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: mealTitle,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="star"
            iconName={isFavorite ? "ios-star" : "ios-star-outline"}
            onPress={toggleFavorite}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  text: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "open-sans",
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default MealDetailScreen;
