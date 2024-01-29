//import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
//import FontAwesomeIcon6 from "react-native-vector-icons/FontAwesome6";
//import AntIcon from "react-native-vector-icons/AntDesign";
// import Ionicons from "react-native-vector-icons/Ionicons";
//<Ionicons name="footsteps-outline" size={24} color="black" />
import {
  Ionicons,
  FontAwesome as FontAwesomeIcon,
  AntDesign as AntIcon,
  MaterialCommunityIcons as MaterialCommunityIcon,
  Feather as FeatherIcon,
  Fontisto as FontistoIcon,
  FontAwesome6 as FontAwesome6Icon,
  MaterialIcons as MaterialIcon,
} from "@expo/vector-icons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import palette from "./palette";

class Icon {
  private static _instance: Icon;
  public static get instance() {
    return this._instance || (this._instance = new Icon());
  }

  camera = (s: number = 20, c: string = palette.GREY) => {
    return (
      <MaterialCommunityIcon
        name="camera-wireless-outline"
        size={s}
        color={c}
      />
    );
  };

  plus = (s: number = 18, c: string = palette.GREY) => {
    return <FontAwesome6Icon name="plus" size={s} color={c} />;
  };

  list = (s: number = 18, c: string = palette.GREY) => {
    return <FontAwesome6Icon name="list" size={s} color={c} />;
  };

  map = (s: number = 18, c: string = palette.GREY) => {
    return <FontistoIcon name="map" size={s} color={c} />;
  };

  search = (s: number = 20, c: string = palette.BLACK) => {
    return <AntIcon name="search1" size={s} color={c} />;
  };

  back = (s: number = 20, c: string = palette.BLACK) => {
    return <AntIcon name="left" size={s} color={c} />;
  };

  home = (s: number = 20, c: string = palette.BLACK) => {
    return <AntIcon name="home" size={s} color={c} />;
  };

  heart = (s: number = 22, c: string = palette.BLACK) => {
    return <AntIcon name="hearto" size={s} color={c} />;
  };

  comment = (s: number = 22, c: string = palette.BLACK) => {
    return <AntIcon name="message1" size={s} color={c} />;
  };

  chat = (s: number = 22, c: string = palette.BLACK) => {
    return <AntIcon name="aliwangwang-o1" size={s} color={c} />;
  };

  credit = (s: number = 22, c: string = palette.BLACK) => {
    return <AntIcon name="creditcard" size={s} color={c} />;
  };

  picture = (s: number = 20, c: string = palette.GREY) => {
    return <Ionicons name="images-outline" size={s} color={c} />;
  };

  video = (s: number = 20, c: string = palette.GREY) => {
    return <OcticonsIcon name="video" size={s} color={c} />;
  };

  more = (s: number = 20, c: string = palette.GREY) => {
    return <FeatherIcon name="more-horizontal" size={s} color={c} />;
  };

  toggleOn = (s: number = 32, c: string = palette.AZURE) => {
    return <FontAwesomeIcon name="toggle-on" size={s} color={c} />;
  };

  toggleOff = (s: number = 32, c: string = palette.GREY) => {
    return <FontAwesomeIcon name="toggle-off" size={s} color={c} />;
  };

  marker = (s: number = 20, c: string = palette.GREY) => {
    return <FontistoIcon name="map-marker-alt" size={s} color={c} />;
  };

  upload = (s: number = 20, c: string = palette.GREY) => {
    return <SimpleLineIcons name="cloud-upload" size={s} color={c} />;
  };

  foot = (s: number = 20, c: string = palette.GREY) => {
    return <Ionicons name="footsteps-outline" size={s} color={c} />;
  };

  user = (s: number = 32, c: string = palette.GREY) => {
    return <FontAwesomeIcon name="user-circle" size={s} color={c} />;
  };

  rank = (s: number = 32, c: string = palette.GREY) => {
    return <FontAwesome6Icon name="ranking-star" size={s} color={c} />;
  };

  premium = (s: number = 20, c: string = palette.GREY) => {
    return <MaterialIcon name="workspace-premium" size={s} color={c} />;
  };

  post = (s: number = 20, c: string = palette.BLACK) => {
    return <MaterialCommunityIcon name="post-outline" size={s} color={c} />;
  };
}

export default Icon.instance;
