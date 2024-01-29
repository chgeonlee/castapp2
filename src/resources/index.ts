import { DeviceEventEmitter } from "react-native";
import PinResource from "./pin";
import PostResource from "./post";
import UserResource from "./user";

class Resource {
  private static _instance: Resource;

  public static get instance() {
    return this._instance || (this._instance = new Resource());
  }

  public get post() {
    return PostResource.instance;
  }

  public get pin() {
    return PinResource.instance;
  }

  public get user() {
    return UserResource.instance;
  }
}

export default Resource.instance;
