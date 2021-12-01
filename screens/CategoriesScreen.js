import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        color={itemData.item.color}
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealScreen",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
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
CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItems: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
