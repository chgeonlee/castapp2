import { BlurView } from "expo-blur";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import lib from "../lib";

const Header = ({ name, onback }: { name: string; onback?: () => void }) => {
  return (
    // <BlurView intensity={100} tint="default" style={deco.wrap}>
    <View style={deco.wrap}>
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            gap: 18,
            zIndex: 1000,
          },
        ]}
      >
        {onback && (
          <TouchableOpacity
            onPress={() => {
              onback();
            }}
            style={{
              position: "absolute",
              zIndex: 10,
            }}
          >
            <View style={{}}>{lib.icon.back()}</View>
          </TouchableOpacity>
        )}
        <View
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
            },
          ]}
        >
          <Text style={lib.style.font.logo()}>{name}</Text>
        </View>
      </View>
    </View>
    // </BlurView>
  );
};

export default Header;

const deco = StyleSheet.create({
  wrap: {
    padding: 12,
    //paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
});
