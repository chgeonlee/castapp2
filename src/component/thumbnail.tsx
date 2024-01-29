import { Image, StyleSheet, Text, View } from "react-native";
import lib from "../lib";

export enum ThumbnailSizeType {
  MEDIUM,
  LARGE,
}

const Thumbnail = ({
  url,
  type = ThumbnailSizeType.MEDIUM,
}: {
  url: string;
  type: ThumbnailSizeType;
}) => {
  return (
    <Image
      source={{ uri: url }}
      style={
        type == ThumbnailSizeType.MEDIUM
          ? styles.containerMedium
          : styles.containerLarge
      }
    />
  );
};

const m = 38;
const l = 62;

const styles = StyleSheet.create({
  containerMedium: {
    width: m,
    height: m,
    borderRadius: m,
    borderWidth: 0.5,
    borderColor: lib.palette.GREY,
  },
  containerLarge: {
    width: l,
    height: l,
    borderRadius: l,
  },
});

export default Thumbnail;
