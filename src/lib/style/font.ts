import { StyleProp, TextStyle } from "react-native/types";
import palette from "../palette";

type fontWeightType =
  | "700"
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "800"
  | "900"
  | undefined;
export default class Font {
  private static _instance: Font;
  public static get instance() {
    return new Font();
  }
  logo = (c: string = palette.GREY): StyleProp<TextStyle> => {
    return {
      fontFamily: "Railway-Medium",
      fontSize: 21,
      color: c,
    };
  };

  title = (
    c: string = palette.GREY,
    w: fontWeightType = "500"
  ): StyleProp<TextStyle> => {
    return {
      fontSize: 20,
      color: c,
      fontWeight: w,
    };
  };
  subtitle = (
    c: string = palette.BLACK,
    w: fontWeightType = "700"
  ): StyleProp<TextStyle> => {
    return {
      fontWeight: w,
      fontSize: 17,
      color: c,
    };
  };
  normal = (
    c: string | null = palette.BLACK,
    w: fontWeightType = "400"
  ): StyleProp<TextStyle> => {
    return {
      fontWeight: w,
      fontSize: 14,
      lineHeight: 20,
      color: c || palette.BLACK,
    };
  };

  description = (
    c: string = palette.GREY,
    e: boolean = false
  ): StyleProp<TextStyle> => {
    return {
      fontWeight: e ? "700" : "300",
      fontSize: 14,
      color: c,
      lineHeight: 20,
    };
  };

  hint = (
    c: string = palette.GREY,
    w: fontWeightType = "300"
  ): StyleProp<TextStyle> => {
    return {
      fontWeight: w,
      fontSize: 12,
      color: c,
    };
  };

  tiny = (c: string = palette.GREY): StyleProp<TextStyle> => {
    return {
      fontWeight: "300",
      fontSize: 11,
      color: c,
    };
  };
}
