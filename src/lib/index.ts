import icon from "./icon";
import location from "./location";
import palette from "./palette";
import string from "./string";
import style from "./style";
import time from "./time";

class Library {
  private static _instance: Library;
  public static get instance() {
    return this._instance || (this._instance = new Library());
  }

  public get palette() {
    return palette;
  }

  public get icon() {
    return icon;
  }

  public get time() {
    return time;
  }

  public get style() {
    return style;
  }

  public get string() {
    return string;
  }

  public get location() {
    return location;
  }
}

export default Library.instance;
