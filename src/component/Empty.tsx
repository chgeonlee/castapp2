import { Image, StyleSheet, Text, View } from "react-native";
import lib from "../lib";

const EmptyViewComponent = () => {
  const str = "This location has no data.\nBe the first to leave your mark";

  return (
    <View style={deco.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/48/fb/90/48fb90bcf2a1f779ee66deee8a12c898.png",
        }}
        style={deco.img}
      />
      <View style={deco.txt}>
        {str.split("\n").map((v, i) => (
          <Text key={i} style={lib.style.font.description()}>
            {v}
          </Text>
        ))}
      </View>
    </View>
  );
};

const deco = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: 320,
  },

  txt: {
    alignItems: "center",
  },
});

export default EmptyViewComponent;
