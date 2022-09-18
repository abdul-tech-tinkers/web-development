import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowLongRightIcon } from "react-native-heroicons/outline";
import RestaurentCard from "./RestaurentCard";
import restaurentsData from "../api/restaurents.json";

const FeaturedRow = ({ id, title, description }) => {
  useEffect(() => {
    const getAllRestaurents = () => {
      console.log("getting data for restaurents");
      SetFeaturedCategories(JSON.parse(JSON.stringify(restaurentsData)));
      console.log(FeaturedCategories);
    };
    getAllRestaurents();
  }, []);

  const [FeaturedCategories, SetFeaturedCategories] = useState([]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowLongRightIcon color="#00CCBB" size={30}></ArrowLongRightIcon>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {FeaturedCategories?.map((item) => {
          return (
            <RestaurentCard
              key={item.id}
              id={item.id}
              title={item.title}
              imgUrl={item.imgUrl}
              rating={item.rating}
              genre={item.genre}
              address={item.address}
              short_description={item.short_description}
              dishes={item.dishes}
              long={item.long}
              lat={item.lat}
            ></RestaurentCard>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
