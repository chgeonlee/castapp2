import {
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import lib from "../lib";

const EnableLocationViewComponent = () => {
  const str = "This page requires location information";
  const onPressHandler = () => {
    if (Platform.OS == "ios") {
      Linking.openURL("app-settings:");
    } else if (Platform.OS == "android") {
      Linking.openSettings();
    } else {
      throw new Error("not implemented");
    }
  };

  return (
    <View style={deco.container}>
      <Image
        source={{
          uri: "https://cdni.iconscout.com/illustration/premium/thumb/error-8694026-6983265.png?f=webp",
        }}
        style={deco.img}
      />
      <View style={deco.txt}>
        <Text style={lib.style.font.description()}>{str}</Text>
      </View>
      <TouchableOpacity onPress={onPressHandler}>
        <View
          style={{
            borderWidth: 1,
            padding: 8,
            borderRadius: 4,
            borderColor: lib.palette.LIGHT_GREY_2,
          }}
        >
          <Text style={lib.style.font.description()}>Enable Location</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EnableLocationViewComponent;

const deco = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  img: {
    width: "100%",
    height: 320,
  },
  txt: {},
});
