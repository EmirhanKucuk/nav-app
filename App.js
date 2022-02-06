import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import MealsNavigator from "./navigation/MealNavigator.js";
import { LogBox } from "react-native";
import { createStore, combineReducers } from "redux";
import mealsReducers from "./store/reducers/meals";
import { Provider } from "react-redux";

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducers,
});

const store = createStore(rootReducer);
const fetchFonts = async () => {
  await Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
export default function App() {
  LogBox.ignoreLogs(["Interpolate"]);
  const [fontLoaded, setFontloaded] = useState(false);
  useEffect(() => {
    LogBox.ignoreLogs([
      "interpolate() was renamed to interpolateNode() in Reanimated 2. Please use interpolateNode() instead",
    ]);
  }, []);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontloaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
