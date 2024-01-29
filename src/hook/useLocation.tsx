import { useEffect, useState } from "react";
import { AppState, DeviceEventEmitter } from "react-native";
import constants from "../constants";
import lib from "../lib";
import { LocationDataType } from "../lib/location";

const useLocation = () => {
  const [availableLocation, setAvailableLocation] = useState(false);
  const [locationData, setLocationData] = useState<LocationDataType | null>(
    null
  );

  useEffect(() => {
    const recordLocationData = () => {
      setLocationData(lib.location.data);
    };
    DeviceEventEmitter.addListener(
      constants.event.LOADED_LOCATION_DATA,
      recordLocationData
    );

    const checkAvailableLocationService = async () => {
      const enable = await lib.location.canService();

      setAvailableLocation(enable);

      if (enable) {
        if (lib.location.loaded()) {
          console.log("loaded");
          recordLocationData();
        } else {
          console.log("load");
          lib.location.load();
        }
      } else {
        setLocationData(null);
      }
    };

    const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState == "active" && availableLocation == false) {
        checkAvailableLocationService();
      }
    };

    AppState.addEventListener("change", handleAppStateChange);

    checkAvailableLocationService();

    return () => {
      DeviceEventEmitter.removeAllListeners(
        constants.event.LOADED_LOCATION_DATA
      );
    };
  }, []);

  return { availableLocation, locationData };
};

export default useLocation;
