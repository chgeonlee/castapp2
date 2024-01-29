import EventConstants from "./event";

class Constants {
  private static _instance: Constants;
  public static get instance() {
    return this._instance || (this._instance = new Constants());
  }

  get event() {
    return EventConstants;
  }
}

export default Constants.instance;
