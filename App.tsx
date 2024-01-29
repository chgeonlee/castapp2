import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/Navigation";
import lib from "./src/lib";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Oswald-Medium": require("./assets/fonts/Oswald-Regular.ttf"),
    "Cinzel-ExtraBold": require("./assets/fonts/Cinzel-Medium.ttf"),
    "Cinzel-Medium": require("./assets/fonts/Cinzel-Bold.ttf"),
    "Cinzel-Regular": require("./assets/fonts/Cinzel-Regular.ttf"),
    "Railway-Medium": require("./assets/fonts/Raleway-Medium.ttf"),
    "Railway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  /***
   * useModal 을 이용해서 공용 modal 을 만든다
   * example : take photo
   */

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lib.palette.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
});
