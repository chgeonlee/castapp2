import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import lib from "../../lib";
import { PostDataProps } from "../../resources/post";
import PostImageCarousel from "../carousel/PostImageCarousel";
import Thumbnail, { ThumbnailSizeType } from "../thumbnail";

export interface PinCardProps extends Omit<PostDataProps, "dbid" | "detail"> {}

const PinCard: FC<
  PinCardProps & { wide?: boolean; onpress: (dbid: string) => void }
> = ({ user, content, statistics, location, wide = false, onpress }) => {
  const navi = useNavigation<StackNavigationProp<any>>();

  const handleThumbnailClick = () => {
    onpress(user.dbid);
  };

  const iconSize = 18;

  return (
    <View style={deco.container}>
      <View style={[deco.column1]}>
        {wide == false && (
          <TouchableOpacity onPress={handleThumbnailClick}>
            <Thumbnail
              url={user.thumb as string}
              type={ThumbnailSizeType.MEDIUM}
            />
          </TouchableOpacity>
        )}
        <View
          style={{
            flex: 1,
            marginVertical: 8,
          }}
        >
          <View
            style={{
              width: 1,
              left: "50%",
              borderWidth: 0.5,
              flex: 1,
              borderRadius: 4,
            }}
          ></View>
        </View>
      </View>
      <View style={deco.column2}>
        <View style={[deco.spaceBetween]}>
          <TouchableOpacity onPress={handleThumbnailClick}>
            <Text style={lib.style.font.normal(null, "600")}>{user.id}</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
            <Text style={lib.style.font.hint(lib.palette.DARK)}>
              {lib.time.convertSimpleTime(content.upload_at)}
            </Text>
            <TouchableOpacity onPress={() => {}}>
              {lib.icon.more(24, lib.palette.DARK_GREY)}
            </TouchableOpacity>
          </View>
        </View>
        {content.text && (
          <View>
            <Text style={lib.style.font.normal()}>{content.text.trim()}</Text>
          </View>
        )}
        {content.media.length > 0 && (
          <View style={[{ marginTop: content.text ? 0 : 12 }]}>
            <PostImageCarousel data={content.media} wide={wide} />
          </View>
        )}
        <View style={{ marginVertical: 8 }}>
          <View
            style={{
              flexDirection: "row",
              gap: 14,
              justifyContent: "space-between",
              paddingRight: 12,
            }}
          >
            <View style={deco.item}>
              {lib.icon.heart(iconSize)}
              <Text style={lib.style.font.description()}>
                +{statistics.like}
              </Text>
            </View>
            <View style={deco.item}>
              {lib.icon.comment(iconSize)}
              <Text style={lib.style.font.description()}>
                +{statistics.like - 5}
              </Text>
            </View>

            <View style={deco.item}>{lib.icon.chat(iconSize)}</View>
            <View style={deco.item}>{lib.icon.credit(iconSize)}</View>
          </View>
        </View>
      </View>
    </View>
  );
};

const deco = StyleSheet.create({
  container: {
    paddingBottom: 36,
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 12,
  },

  column1: {},

  column2: {
    flex: 1,
    gap: 8,
  },

  spaceBetween: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 12,
    alignItems: "center",
  },

  item: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
});

export default PinCard;
