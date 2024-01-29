import { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  DeviceEventEmitter,
  ScrollView,
} from "react-native";

import EmptyViewComponent from "../component/Empty";
import LoadingView from "../component/Loading";
import EnableLocationViewComponent from "../component/EnableLocation";
import constants from "../constants";
import useLocation from "../hook/useLocation";
import lib from "../lib";
import resources from "../resources";
import { PinDataProps } from "../resources/pin";
import PinCard from "../component/card/PinCard";
import { BlurView } from "expo-blur";
import PinUploadModal from "../component/modal/PinUpload";
import PostUploadModal from "../component/modal/PostUpload";
import Header from "../component/Header";

const Mark = () => {
  const [viewMode, setViewMode] = useState<"map" | "list">("list");
  const { availableLocation, locationData } = useLocation();
  const [data, setData] = useState<PinDataProps[]>([]);
  /**
   *location Info 가 있는가? 로 시작
   
   */

  useEffect(() => {
    if (availableLocation == false) return;

    const getPinData = () => {
      if (resources.pin.data == null) {
        setData([]);
      } else {
        setData(resources.pin.data);
      }
    };

    if (resources.pin.loaded()) {
      getPinData();
    } else {
      DeviceEventEmitter.addListener(
        constants.event.LOADED_PIN_DATA,
        getPinData
      );
      resources.pin.load();
    }

    return () => {
      DeviceEventEmitter.removeAllListeners(constants.event.LOADED_PIN_DATA);
    };
  }, [availableLocation]);

  if (availableLocation == false) {
    return (
      <SafeAreaView>
        <EnableLocationViewComponent />
      </SafeAreaView>
    );
  }
  if (data.length == 0)
    return (
      <SafeAreaView>
        <EmptyViewComponent />
      </SafeAreaView>
    );

  if (locationData == null) return <View></View>;
  return (
    <SafeAreaView style={deco.wrap}>
      <ScrollView stickyHeaderIndices={[1]}>
        <Header name={"Pin"} />
        <View style={deco.headerWrapper}>
          <BlurView intensity={100} tint="default" style={deco.header}>
            <View style={deco.headerFore}>
              <View>{lib.icon.marker()}</View>
              <Text style={lib.style.font.normal(lib.palette.DARK, "500")}>
                {locationData?.address.region} {locationData?.address.district}{" "}
                {locationData?.address.name}
              </Text>
            </View>
            <View style={deco.headerRear}>
              {viewMode == "list"
                ? lib.icon.map(undefined, lib.palette.LIGHT_GREY_2)
                : lib.icon.list()}
            </View>
          </BlurView>
        </View>
        <View style={deco.content}>
          {data.map((item) => {
            return <PinCard key={item.dbid} {...item} onpress={() => {}} />;
          })}
        </View>
      </ScrollView>
      <PinUploadModal />
      {/* <PostUploadModal /> */}
    </SafeAreaView>
  );
};

export default Mark;

const deco = StyleSheet.create({
  wrap: {
    backgroundColor: lib.palette.WHITE,
  },
  headerWrapper: {},
  header: {
    padding: 16,
    paddingHorizontal: 24,
    backgroundColor: "rgba(255,255,255,0.75)",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerFore: {
    flexDirection: "row",
    alignItems: "center",
    gap: 22,
  },

  headerRear: {
    flexDirection: "row",
    gap: 12,
  },

  content: {
    paddingTop: 12,
  },
});
