import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  QuestionMarkCircleIcon,
  StarIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
import DishRow from "./DishRow";

const RestaurentScreen = () => {
  const route = useRoute();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  var restaurent = route.params;
  return (
    <ScrollView>
      <View className="relative">
        <Image
          className="w-full h-56 bg-gray-300 p-4"
          source={{ uri: restaurent?.imgUrl }}
        ></Image>
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="#00CCBB"></ArrowLeftIcon>
        </TouchableOpacity>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{restaurent.title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row flex items-center space-x-1">
                <StarIcon opacity={0.5} size={20} color="green"></StarIcon>
                <View className="text-xs text-gray-500">
                  <Text className="text-gray-500">
                    {restaurent.rating} - {restaurent.genre}
                  </Text>
                </View>
              </View>

              <View className="flex-row flex items-center space-x-1">
                <MapPinIcon opacity={0.4} size={20} color="gray"></MapPinIcon>
                <View className="text-xs text-gray-500">
                  <Text className="text-gray-500">
                    Near By - {restaurent.address}
                  </Text>
                </View>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-2">
              {restaurent.short_description}
            </Text>
          </View>
        </View>
        <TouchableOpacity className="space-x-2 pb-4 p-4 border-y border-gray-300 flex-row items-center">
          <QuestionMarkCircleIcon color="gray" size={22} />
          <Text className="font-bold text-md flex-1">Have a food allergy?</Text>
          <ChevronRightIcon color="gray" size={22}></ChevronRightIcon>
        </TouchableOpacity>
      </View>
      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
      </View>
      <View className="bg-white">
        <DishRow
          key={34343}
          id={34343}
          name="Qhoost Kheema"
          price="$ 2.5"
          description="Qhoost Kheema with bakre ka qhost, roasted with olive oil"
          imgUrl={restaurent.imgUrl}
        ></DishRow>
        <DishRow
          key={34342}
          id={34342}
          name="Qhoost Kheema"
          price="$ 2.5"
          description="Qhoost Kheema with bakre ka qhost, roasted with olive oil"
          imgUrl={restaurent.imgUrl}
        ></DishRow>
        <DishRow
          key={222}
          id={222}
          name="Qhoost Kheema"
          price="$ 2.5"
          description="Qhoost Kheema with bakre ka qhost, roasted with olive oil"
          imgUrl={restaurent.imgUrl}
        ></DishRow>
        <DishRow
          key={343432224343}
          id={343432224343}
          name="Qhoost Kheema"
          price="$ 2.5"
          description="Qhoost Kheema with bakre ka qhost, roasted with olive oil"
          imgUrl={restaurent.imgUrl}
        ></DishRow>
        <DishRow
          key={3434324343}
          id={3434324343}
          name="Qhoost Kheema"
          price="$ 2.5"
          description="Qhoost Kheema with bakre ka qhost, roasted with olive oil"
          imgUrl={restaurent.imgUrl}
        ></DishRow>
      </View>
    </ScrollView>
  );
};

export default RestaurentScreen;
