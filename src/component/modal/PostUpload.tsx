import BottomSheet, { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import useLocation from "../../hook/location";
import lib from "../../lib";
import * as ImagePicker from "expo-image-picker";
import Carousel from "react-native-snap-carousel";
import resources from "../../resources";
import { forwardRef } from "react";

const TextInput = forwardRef(({ ...props }, ref: any) => {
  const focus = () => {};
  const blur = () => {};
  const onChangeHandler = (text: string) => {
    ref!.current = text;
  };

  return (
    <View style={stylesTextInput.container}>
      <BottomSheetTextInput
        placeholder="글을 작성하세요"
        multiline={true}
        onFocus={focus}
        onBlur={blur}
        onChangeText={onChangeHandler}
        {...props}
      />
    </View>
  );
});

const PostUploadModal = () => {
  const textInputRef = useRef<string>();
  // const { loading, address } = useLocation();
  const ref = useRef<BottomSheet>(null);
  const snapPoints = [5, 60];
  const [isPublicLocation, setIsPublicLocation] = useState(true);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]);
  const [initTextValue, setInitTextValue] = useState<string | undefined>();
  const handleInitValue = () => {
    setInitTextValue(undefined);
    setSelectedImages([]);
  };
  const onChangeHandler = () => {};
  const onPressMediaHandler = () => {};

  const onCancelButtonPress = () => {
    handleInitValue();
  };
  const onPostButtonPress = async () => {
    if (textInputRef.current == null && selectedImages.length == 0) {
      alert("기록된 컨텐츠가 없습니다.");
      return;
    }

    ref.current?.snapToIndex(1);
    Keyboard.dismiss();

    //lib.string.formatLocationBase(address);

    resources.post.addItem({
      dbid: null,
      user: {
        dbid: "need get user data",
        id: "chgeon.lee",
        thumbnail:
          "https://i.pinimg.com/474x/64/62/21/6462217a6f50984ec7a1fe049fb9f26b.jpg",
      },
      content: {
        upload_at: new Date().toISOString(),
        text: textInputRef.current || null,
        media: selectedImages.map((url) => {
          return {
            url,
            type: "image",
            ratio: 4 / 3,
          };
        }),
      },
      statistics: {
        like: 0,
        comments: 0,
      },
      location: {
        name: lib.string.formatLocationBase(address),
        isPublic: isPublicLocation,
      },
      detail: null,
    });

    handleInitValue();
  };

  const onSelectPictureHandler = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const selectedImageUris = result.assets.map((asset) => asset.uri);
        setSelectedImages((prevImages) => [
          ...prevImages,
          ...selectedImageUris,
        ]);
      }
    } catch (error) {
      console.error("Error picking an image", error);
    }
  };
  const handleCancelImage = (item: any) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((image) => image !== item)
    );
  };

  const renderImageItem = ({ item }: any) => (
    <View style={styles.carouselItem}>
      <Image source={{ uri: item }} style={styles.carouselImage} />
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => handleCancelImage(item)}
      >
        <Text style={lib.style.font.normal(lib.palette.ROSE)}>취소</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={snapPoints.map((i) => i + "%")}
      onChange={onChangeHandler}
      backgroundComponent={({ style }) => (
        <View style={[style, styles.sheetBackgroundStyle]} />
      )}
      handleComponent={() => {
        return (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 12,
              flexDirection: "row",
              gap: 8,
            }}
          >
            <Text style={lib.style.font.description()}>기록 남기기</Text>
          </View>
        );
      }}
      handleStyle={{
        justifyContent: "center",
      }}

      // handleIndicatorStyle={{
      //   width: 24,
      //   height: 1,
      // }}
    >
      <View style={styles.container}>
        <View style={styles.mainSection}>
          <TextInput ref={textInputRef} />
          {selectedImages.length > 0 && (
            <View style={styles.carouselContainer}>
              <Carousel
                data={selectedImages}
                renderItem={renderImageItem}
                sliderWidth={Dimensions.get("window").width}
                itemWidth={Dimensions.get("window").width * 0.3}
                layout="default"
              />
            </View>
          )}
          <View style={styles.mainRow}>
            <View style={styles.mainCell}>
              <View style={styles.mainIconCell}>{lib.icon.upload()}</View>
              <Text style={lib.style.font.description()}>미디어 업로드</Text>
            </View>
            <View style={styles.mainCell}>
              <TouchableOpacity
                onPress={onSelectPictureHandler}
                style={styles.mainIconCell}
              >
                {lib.icon.picture()}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onPressMediaHandler}
                style={styles.mainIconCell}
              >
                {lib.icon.video(22)}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mainRow}>
            <View style={styles.mainCell}>
              <View style={styles.mainIconCell}>{lib.icon.marker()}</View>
            </View>
            <View style={styles.mainCell}>
              <TouchableOpacity onPress={() => setIsPublicLocation((p) => !p)}>
                {isPublicLocation ? lib.icon.toggleOn() : lib.icon.toggleOff()}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mainRow}></View>
        </View>
        <View style={styles.footSection}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={onCancelButtonPress}
          >
            <Text style={lib.style.font.normal()}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={onPostButtonPress}>
            <Text style={lib.style.font.normal()}>게시</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

export default PostUploadModal;

const stylesTextInput = StyleSheet.create({
  container: {
    backgroundColor: lib.palette.LIGHT_GREY,
    borderRadius: 32,
    justifyContent: "center",
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 18,
  },
});

const styles = StyleSheet.create({
  sheetBackgroundStyle: {
    borderRadius: 12,
    backgroundColor: "red",
    ...lib.style.shadow(),
  },
  container: {
    paddingHorizontal: 12,
    flex: 1,
  },

  mainSection: {
    flex: 1,
    rowGap: 24,
  },

  mainRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  mainIconCell: {
    width: 24,
    alignItems: "center",
  },

  mainCell: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  footSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: lib.palette.GREY,
  },

  postButton: {},

  carouselContainer: {},
  carouselItem: {
    borderRadius: 10,
    overflow: "hidden",
  },
  carouselImage: {
    width: "100%",
    height: 200,
  },
  cancelButton: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 5,
    padding: 5,
  },
});
