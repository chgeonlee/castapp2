import React, { useEffect, useRef, useState } from "react";
import {
  DeviceEventEmitter,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import lib from "../../../lib";
import resources from "../../../resources";
import { UserDataProps, UserResourceEventEnum } from "../../../resources/user";
import Header from "../../Header";
import Thumbnail, { ThumbnailSizeType } from "../../thumbnail";
import PostTabView from "./PostTabView";

enum UserContentEnum {
  POST = "post",
  MARK = "mark",
  PREM = "premium",
}

interface UserDetailViewProps {
  dbid: string;
  onback: () => void;
}

const UserView = ({ dbid, onback }: UserDetailViewProps) => {
  const [data, setData] = useState<UserDataProps>();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const record = () => {
      setData(resources.user.getDataByUserUniqueId(dbid) as UserDataProps);
    };

    DeviceEventEmitter.addListener(
      UserResourceEventEnum.LOADED_DATA_ENTIRE,
      record
    );

    resources.user.entire(dbid, true);

    return () => {
      DeviceEventEmitter.removeAllListeners(
        UserResourceEventEnum.LOADED_DATA_ENTIRE
      );
    };
  }, [dbid]);

  if (data == null) {
    return null;
  }

  const tabItems = [
    {
      name: UserContentEnum.POST,
      icon: lib.icon.post,
      component: () => <PostTabView data={data.detail.contents.post} />,
    },
    {
      name: UserContentEnum.MARK,
      icon: lib.icon.marker,
      component: () => (
        <View>
          <Text>2</Text>
        </View>
      ),
    },
    {
      name: UserContentEnum.PREM,
      icon: lib.icon.premium,
      component: () => (
        <View>
          <Text>3</Text>
        </View>
      ),
    },
  ];

  return (
    <ScrollView stickyHeaderIndices={[0, 2]} style={{ flex: 1 }}>
      {/* [0] 헤더 */}
      <Header name={data.id} onback={onback} />
      {/* [1] 카드 */}
      <View style={deco.card}>
        {
          <View
            style={{
              top: 0,
              height: 120,
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <Image
              source={{
                uri: "https://i.pinimg.com/474x/64/62/21/6462217a6f50984ec7a1fe049fb9f26b.jpg",
              }}
              style={{
                width: "100%",
                height: "100%",
              }}
            ></Image>
          </View>
        }
        <View style={deco.cardHead}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <Thumbnail
              url={data.thumb as string}
              type={ThumbnailSizeType.LARGE}
            />
            <Text style={lib.style.font.normal(null, "700")}>{data.name}</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
            <View style={deco.span}>
              <View>{lib.icon.picture(14)}</View>
              <Text style={lib.style.font.hint(lib.palette.DARK)}>
                팔로우하기
              </Text>
            </View>
            <View style={deco.span}>
              <View>{lib.icon.credit(14)}</View>
              <Text style={lib.style.font.hint(lib.palette.DARK)}>
                프리미엄 구독하기
              </Text>
            </View>
          </View>
        </View>
        <View style={deco.cardBody}>
          <Text style={lib.style.font.description()} numberOfLines={5}>
            {data.intr}
          </Text>
        </View>
        <View style={deco.cardFoot}>
          <View style={deco.span}>
            <Text style={lib.style.font.hint(undefined, "300")}>팔로워</Text>
            <Text style={lib.style.font.hint(undefined, "700")}>128</Text>
          </View>
          <View style={deco.span}>
            <Text style={lib.style.font.hint(undefined, "300")}>프리미엄</Text>
            <Text style={lib.style.font.hint(undefined, "700")}>4</Text>
          </View>
        </View>
      </View>
      {/* [2] 탭 */}
      <View style={deco.tab}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          {tabItems.map((item, idx) => {
            const spec = [deco.tabItem] as any;

            if (idx == activeTab) {
              spec.push(deco.active);
            }

            return (
              <TouchableOpacity onPress={() => setActiveTab(idx)} style={spec}>
                <View key={idx}>{item.icon()}</View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {/* [3] 탭 컨텐츠 */}
      <View style={{ paddingVertical: 24 }}>
        {tabItems[activeTab].component()}
      </View>
    </ScrollView>
  );
};

export default UserView;

const deco = StyleSheet.create({
  tab: {
    backgroundColor: lib.palette.WHITE,
    borderColor: lib.palette.LIGHT_GREY_2,
    borderTopWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 12,
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
  },

  card: {
    gap: 18,
    padding: 12,
    flex: 1,
  },

  span: {
    flexDirection: "row",
    padding: 4,
    paddingVertical: 6,
    gap: 6,
    alignItems: "center",
  },

  cardHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  active: {
    borderColor: lib.palette.DARK,
    borderBottomWidth: 2,
  },

  cardBody: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: lib.palette.LIGHT_GREY + "",
  },
  cardFoot: {
    flexDirection: "row",
    gap: 4,
  },
});
