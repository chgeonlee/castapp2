import { View, SafeAreaView, Text, ScrollView, StyleSheet } from "react-native";
import Header from "../component/Header";
import lib from "../lib";

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Scroll View Region */}
      <ScrollView style={styles.scrollViewContainer}>
        <Header name={"Find"} color={lib.palette.BLACK} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lib.palette.WHITE,
  },
  scrollViewContainer: {
    gap: 12,
  },
});
