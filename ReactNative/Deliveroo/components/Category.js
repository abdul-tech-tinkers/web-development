import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Category = ({ name, imgUrl }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        className="h-20 w-20 rounded"
        source={{
          uri: imgUrl,
        }}
      ></Image>
      <Text className="text-white font-bold absolute bottom-1 left-1">{name}</Text>
    </TouchableOpacity>
  );
};

export default Category;
