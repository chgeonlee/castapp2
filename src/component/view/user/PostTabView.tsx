import { Text, View } from "react-native";
import PostCard from "../../card/PostCard";

const PostTabView = ({ data }: any) => {
  return (
    <View>
      {data.map((item, idx) => {
        return (
          <PostCard
            key={item.dbid || idx}
            user={item.user}
            content={item.content}
            statistics={item.statistics}
            location={item.location}
            onpress={() => {}}
          />
        );
      })}
    </View>
  );
};

export default PostTabView;
