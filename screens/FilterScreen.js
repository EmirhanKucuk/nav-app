import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Text, Switch, Platform } from "react-native";
import Colors from "../constant/colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/mealActions";
const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.text}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor, false: "grey" }}
        thumbColor={Platform.OS == "android" ? Colors.primaryColor : ""}
        onValueChange={props.onChange}
        value={props.data}
      />
    </View>
  );
};
const FilterScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const dispatch = useDispatch();
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan, dispatch]);
  useEffect(() => {
    //Storing the function inside the save
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        text="Gluten-free"
        onChange={() => setIsGlutenFree((previousData) => !previousData)}
        data={isGlutenFree}
      />
      <FilterSwitch
        text="Lactose-free"
        onChange={() => setIsLactoseFree((previousData) => !previousData)}
        data={isLactoseFree}
      />
      <FilterSwitch
        text="Vegetarian"
        onChange={() => setIsVegetarian((previousData) => !previousData)}
        data={isVegetarian}
      />
      <FilterSwitch
        text="Vegan"
        onChange={() => setIsVegan((previousData) => !previousData)}
        data={isVegan}
      />
    </View>
  );
};

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={() => {
            navData.navigation.getParam("save")();
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    width: "80%",
  },
});
export default FilterScreen;
