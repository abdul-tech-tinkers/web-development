import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";

const RestaurentCard = ({
  id,
  title,
  imgUrl,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow-sm">
      <Image className="h-36 w-64 rounded-md" source={{ uri: imgUrl }}></Image>
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.4} size={22}></StarIcon>
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22}></MapPinIcon>
          <Text className="text-xs text-gray-500">{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurentCard;
