import React from "react";
import { Text, View, TouchableHighlight } from "react-native";

export default function ColorButton({ backgroundColor, onPress = (f) => f }) {
  return (
    <TouchableHighlight onPress={() => onPress(backgroundColor)}>
      <View className="my-1 ring-1 ring-red-500 ring-offset-1 w-80 text-center flex flex-row justify-center items-center p-4 bg-green-300">
        <View
          style={{ backgroundColor }}
          className="ring-1 text-center bg-[{backgroundColor}]-500 rounded-full h-4 w-4 mr-2"
        ></View>
        <Text className="ml-2 text-center text-blue-900 uppercase font-bold text-2xl">
          {backgroundColor}
        </Text>
      </View>
    </TouchableHighlight>
  );
}
