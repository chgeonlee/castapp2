import * as ExpoLocation from "expo-location";
import { DeviceEventEmitter } from "react-native";
import constants from "../constants";

export interface LocationDataType {
  address: ExpoLocation.LocationGeocodedAddress;
  location: ExpoLocation.LocationObject;
}

class Location {
  private static _instance: Location;
  public static get instance() {
    return this._instance || (this._instance = new Location());
  }
  data: LocationDataType | null = null;

  private constructor() {}

  // location service가 이용가능한지
  async canService() {
    const p = await ExpoLocation.hasServicesEnabledAsync();
    const { status } = await ExpoLocation.requestForegroundPermissionsAsync();

    return p && status == "granted";
  }

  loading: boolean = false;
  // load location data
  async load() {
    const available = await this.canService();
    if (available == false) {
      console.log("avaiable false");
      return;
    }
    if (this.loading) {
      console.log("now loading");
      return;
    }

    this.loading = true;

    const p = await ExpoLocation.getLastKnownPositionAsync({});

    if (!p) return;

    const g = await ExpoLocation.reverseGeocodeAsync({
      latitude: p.coords.latitude,
      longitude: p.coords.longitude,
    });

    this.data = {
      location: p,
      address: g[0],
    };

    this.loading = false;
    DeviceEventEmitter.emit(constants.event.LOADED_LOCATION_DATA);
  }

  loaded() {
    return this.data !== null;
  }
}

export default Location.instance;
