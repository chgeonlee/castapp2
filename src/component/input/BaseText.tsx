import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { forwardRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import lib from "../../lib";

const SheetTextInput = forwardRef(({ ...props }, ref: any) => {
  const onChangeHandler = (text: string) => {
    ref!.current = text;
  };

  return (
    <View style={deco.wrap}>
      <BottomSheetTextInput
        placeholder="글을 작성하세요"
        multiline={true}
        onChangeText={onChangeHandler}
      />
    </View>
  );
});

export default SheetTextInput;

const deco = StyleSheet.create({
  wrap: {
    borderWidth: 0.5,
    borderColor: lib.palette.DARK_GREY,
    borderRadius: 32,
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 18,
  },
});
