import { LocationGeocodedAddress } from "expo-location";

class String {
  private static _instance: String;
  public static get instance() {
    return this._instance || (this._instance = new String());
  }

  formatLocationBase(address: LocationGeocodedAddress | null) {
    return address
      ? `${address.district}, ${address.city}`
      : "위치 정보가 없습니다.";
  }
}

export default String.instance;
