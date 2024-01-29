import React from "react";
import { View, Image, Text } from "react-native";
import lib from "../lib";

const LoadingView = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{
          uri: "https://miro.medium.com/v2/resize:fit:1400/1*Gvgic29bgoiGVLmI6AVbUg.gif",
        }}
        style={{
          width: 50,
          height: 50,
        }}
      />
      <Text style={lib.style.font.description()}>Loading...</Text>
    </View>
  );
};

export default LoadingView;
