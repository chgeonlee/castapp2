import palette from "../palette";
import Font from "./font";

class Style {
  private static _instance: Style;
  public static get instance() {
    return this._instance || (this._instance = new Style());
  }

  shadow(w = 0, h = 1) {
    return {
      elevation: 10,
      shadowColor: palette.BLACK,
      shadowOffset: { width: w, height: h },
      shadowOpacity: 0.3,
      shadowRadius: 3,
    };
  }

  get font() {
    return Font.instance;
  }
}

export default Style.instance;
