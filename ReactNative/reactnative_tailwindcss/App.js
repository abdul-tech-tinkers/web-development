import { StatusBar } from "expo-status-bar";
import { View, FlatList } from "react-native";
import { React, useState } from "react";
import ColorButton from "./components/ColorButton";
import ColorCodes from "./data/defaultColors.json";

export default function App() {
  const [backgroundColor, backgroundColorChanged] = useState("white");
  return (
    <View
      style={{ backgroundColor }}
      className="flex flex-rows h-screen w-screen items-center justify-center bg-red-50]"
    >
      <FlatList
        data={ColorCodes}
        renderItem={({ item }) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.color}
              onPress={backgroundColorChanged}
            />
          );
        }}
      />
    </View>
  );
}
