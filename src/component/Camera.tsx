import { Camera } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import lib from "../lib";

const CameraViewComponent = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const cameraRef = useRef(null);
  const takePicture = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      console.log("사진이 찍혔습니다:", uri);
      // 찍힌 사진을 어떻게 활용할지에 대한 로직을 추가할 수 있습니다.
    }
  };

  const getPermissionAsync = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>카메라 접근 권한이 거부되었습니다.</Text>;
  }

  return (
    <SafeAreaView style={deco.wrap}>
      <View style={{ height: 48 }}></View>
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        ref={cameraRef}
      >
        <View>
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                alignItems: "center",
                marginBottom: 16,
              }}
              onPress={takePicture}
            >
              <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
                사진 찍기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </SafeAreaView>
  );
};

export default CameraViewComponent;

const deco = StyleSheet.create({
  wrap: {
    position: "absolute",
    top: 60,
    backgroundColor: lib.palette.ROSE,
    width: "100%",
    height: "90%",
    zIndex: 100,
  },
});
