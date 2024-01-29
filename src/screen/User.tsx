// import { useEffect, useState } from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   useWindowDimensions,
//   DeviceEventEmitter,
// } from "react-native";
// import Thumbnail, { ThumbnailSizeType } from "../component/thumbnail";
// import lib from "../lib";
// import { UserDataProps, UserResourceEventEnum } from "../resources/user";
// import { TabView, TabBar } from "react-native-tab-view";
// import { ScrollView } from "react-native";
// import PostCard from "../component/card/PostCard";
// import resources from "../resources";
// import UserView from "../component/view/User";
// import { BottomNavigation } from "../Navigation";

// const OwnerScreen = () => {
//   const [data, setData] = useState<UserDataProps | null>(null);

//   useEffect(() => {
//     setData(resources.user.getLoggedUserData());
//   }, []);
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: lib.palette.WHITE }}>
//       <UserView data={data} />
//     </SafeAreaView>
//   );
// };

// const UserScreen = ({ route, navigation }) => {
//   const [data, setData] = useState<UserDataProps | null>(null);
//   const { dbid } = route.params;

//   useEffect(() => {
//     const record = () => {
//       const data = resources.user.getDataByUserUniqueId(dbid) as UserDataProps;
//       setData(data);
//       navigation.setOptions({
//         title: data.id,
//         headerBackTitleVisible: false,
//         headerBackImage: () => {
//           return <View style={{ margin: 12 }}>{lib.icon.home()}</View>;
//         },
//       });
//     };

//     DeviceEventEmitter.addListener(
//       UserResourceEventEnum.LOADED_DATA_ENTIRE,
//       record
//     );

//     resources.user.entire(dbid, true);
//   }, [dbid]);
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: lib.palette.WHITE }}>
//       <UserView dbid={dbid} data={data} />
//     </SafeAreaView>
//   );
// };

// export { OwnerScreen, UserScreen };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: lib.palette.DARK, gap: 12 },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   content: {
//     flex: 1,
//     backgroundColor: lib.palette.WHITE,
//   },
//   scrollViewContainer: {
//     gap: 12,
//     paddingTop: 12,
//   },
// });
