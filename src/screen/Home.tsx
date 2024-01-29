import { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  DeviceEventEmitter,
} from "react-native";
import PostCard from "../component/card/PostCard";
import Header from "../component/Header";
import lib from "../lib";
import resource from "../resources";
import { PostDataProps } from "../resources/post";
import UserDetailView from "../component/view/user";

const HomeScreen = () => {
  const [data, setData] = useState<PostDataProps[] | null>();
  const [userdbid, setUserdbid] = useState<string | null>(null);

  useEffect(() => {
    const record = () => {
      if (resource.post.loaded()) {
        setData(resource.post.data?.map((item) => item));
      }
    };

    const init = () => {
      setUserdbid(null);
    };

    DeviceEventEmitter.addListener("postdataloaded", record);
    DeviceEventEmitter.addListener("homeTabPressed", init);
    resource.post.load(true);

    return () => {
      DeviceEventEmitter.removeAllListeners("postdataloaded");
      DeviceEventEmitter.removeAllListeners("homeTabPressed");
    };
  }, []);

  if (data == null) {
    return <View></View>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {userdbid ? (
        <UserDetailView dbid={userdbid} onback={() => setUserdbid(null)} />
      ) : (
        <ScrollView
          style={styles.scrollViewContainer}
          stickyHeaderIndices={[0]}
        >
          <View style={{ marginBottom: 12 }}>
            <Header name={"Post"} />
          </View>
          {data.map((item, idx) => {
            return (
              <PostCard
                key={item.dbid || idx}
                user={item.user}
                content={item.content}
                statistics={item.statistics}
                location={item.location}
                onpress={(u: string) => setUserdbid(u)}
              />
            );
          })}
          <View style={{ height: 124 }} />
        </ScrollView>
      )}
      {/* <PostUploadModal /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lib.palette.WHITE,
  },
  scrollViewContainer: {
    gap: 12,
  },
});
