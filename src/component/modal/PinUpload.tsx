import BottomSheet, { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import lib from "../../lib";
import CameraViewComponent from "../Camera";
import BaseTextInput from "../input/BaseText";

const PinUploadModal = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["5%", "60%"];

  return (
    <>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backgroundComponent={({ style }) => {
          return <View style={[style, deco.wrapper]}></View>;
        }}
        handleIndicatorStyle={deco.indicator}
        handleStyle={{
          justifyContent: "center",
        }}
      >
        <View style={deco.container}>
          <View style={deco.content}>
            <BaseTextInput />
            <View style={deco.guide}>
              <Text style={lib.style.font.hint(undefined, "700")}>
                Pin 레코드는 즉석 사진만 업로드 가능합니다.
              </Text>
            </View>
            <TouchableOpacity style={deco.iconButton}>
              <View style={{ marginTop: -1 }}>{lib.icon.camera()}</View>
            </TouchableOpacity>
          </View>
          <View style={deco.foot}>
            <View style={deco.textButton}>
              <Text style={lib.style.font.hint(undefined, "700")}>취소</Text>
            </View>
            <View style={deco.textButton}>
              <Text style={lib.style.font.hint(undefined, "700")}>게시</Text>
            </View>
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

export default PinUploadModal;

const deco = StyleSheet.create({
  wrapper: {
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.95)",
    ...lib.style.shadow(),
  },
  indicator: {
    width: 24,
    height: 1,
    marginVertical: 12,
  },
  container: {
    paddingHorizontal: 12,
    flex: 1,
    gap: 12,
  },

  guide: {
    padding: 12,
    alignItems: "center",
    backgroundColor: lib.palette.LIGHT_GREY_2 + "99",
    borderRadius: 4,
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 32,
    paddingHorizontal: 8,
    gap: 4,
  },
  textButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 32,
    borderColor: lib.palette.DARK_GREY,
    gap: 4,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    gap: 12,
  },
  foot: {
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
