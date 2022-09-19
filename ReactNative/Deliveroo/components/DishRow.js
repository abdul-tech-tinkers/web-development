import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PlusIcon,
  MinusIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/solid";
import {
  addToBasket,
  selectBasketItemsWithId,
  removeFromBasket,
} from "../features/basketSlice";

const DishRow = ({ id, name, description, imgUrl, price }) => {
  const [Counter, SetCounter] = useState(0);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, imgUrl, price }));
  };

  const removeItem = () => {
    if (items.length > 0) {
      //console.log(`removing item ${id}`);
      dispatch(removeFromBasket({ id }));
    }
  };

  return (
    <View>
      <TouchableOpacity className="flex border-gray-200 justify-between bg-white border p-4">
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <View className="flex-1 pr-2">
              <Text className="font-bold text-lg mb-1">{name}</Text>
              <Text className="text-gray-400 text-sm">{description}</Text>
              <Text className="text-gray-400 text-sm">{price}</Text>
            </View>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              className="h-20 w-20 bg-gray-300 p-4"
              source={{ uri: imgUrl }}
            ></Image>
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <View className="space-x-2 py-3 ml-4 flex-row items-center">
          <TouchableOpacity onPress={removeItem}>
            <MinusCircleIcon
              opacity={0.5}
              size={40}
              color="#00CCBB"
            ></MinusCircleIcon>
          </TouchableOpacity>
          <Text className="font-bold text-xl">{items?.length}</Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon
              opacity={0.5}
              size={40}
              color="#00CCBB"
            ></PlusCircleIcon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
