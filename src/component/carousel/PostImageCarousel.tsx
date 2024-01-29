import { Dimensions, Image, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

const MAX_HEIGHT = 400;

const PostImageCarousel = ({ data, wide }: any) => {
  const p = wide ? 0 : 64;
  const g = 6;
  let contentWidth = Dimensions.get("window").width - g - p;
  let itemWidth = 0;
  let itemHeight = 0;

  if (data.length == 1) {
    const item = data[0];
    if (item.size) {
      const { width, height } = item.size;
      const ratio = height / width;

      itemWidth = (width > contentWidth ? contentWidth : width) - 12;
      itemHeight = (itemWidth * height) / width;

      if (itemHeight > MAX_HEIGHT) {
        itemHeight = MAX_HEIGHT;
        itemWidth = itemHeight / ratio;
      }
    }
  } else {
    //let c = data.length > 2 ? 3 : 2;
    let c = 2;
    itemWidth = (contentWidth + p * 2) / c;
    itemHeight = itemWidth * 1.33;
  }

  const renderItem = ({ item }: any) => {
    return (
      <View
        style={{
          width: contentWidth,
          height: itemHeight,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: itemWidth,
            height: itemHeight,
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <Image
            source={{ uri: item.url }}
            style={[
              {
                width: "100%",
                height: "100%",
                resizeMode: "cover",
              },
            ]}
          />
        </View>
      </View>
    );
  };

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={Dimensions.get("window").width}
      activeSlideAlignment={"start"}
      itemWidth={itemWidth + g}
      inactiveSlideScale={1}
      inactiveSlideOpacity={1}
      containerCustomStyle={{
        marginLeft: -p,
        paddingLeft: p,
      }}
    ></Carousel>
  );
};

export default PostImageCarousel;
