import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowLongRightIcon } from "react-native-heroicons/outline";
import RestaurentCard from "./RestaurentCard";

const FeaturedRow = ({ id, title, description }) => {
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
        {/*Resturent Cards*/}
        <RestaurentCard
          id="1234"
          title="Al Bek"
          imgUrl="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=400"
          rating={4.2}
          genre="Hyderabadi"
          address="RT Nagar"
          short_description="Foodies Served with Delicious Food"
          dishes="Biryani, Khuskha"
          long={12.5}
          lat={122.3}
        ></RestaurentCard>
        <RestaurentCard
          id="1235"
          title="Chinese Picks"
          imgUrl="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400"
          rating={3.2}
          genre="Chinese"
          address="Bilal Nagar"
          short_description="Foodies Served with Delicious Food"
          dishes="Noodles, Burgers, Kufaees"
          long={12.5}
          lat={122.3}
        ></RestaurentCard>
        <RestaurentCard
          id="1234"
          title="Indian Cuisine"
          imgUrl="https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&w=400"
          rating={4.2}
          genre="North Indian"
          address="Rajaji Nagar"
          short_description="Foodies Served with Delicious Food"
          dishes="Tandoori, Dal"
          long={12.5}
          lat={122.3}
        ></RestaurentCard>
        <RestaurentCard
          id="1234"
          title="Al Bek"
          imgUrl="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=400"
          rating={4.2}
          genre="Hyderabadi"
          address="RT Nagar"
          short_description="Foodies Served with Delicious Food"
          dishes="Biryani, Khuskha"
          long={12.5}
          lat={122.3}
        ></RestaurentCard>
        <RestaurentCard
          id="1234"
          title="Al Bek"
          imgUrl="https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&w=400"
          rating={4.2}
          genre="Hyderabadi"
          address="RT Nagar"
          short_description="Foodies Served with Delicious Food"
          dishes="Biryani, Khuskha"
          long={12.5}
          lat={122.3}
        ></RestaurentCard>
         <RestaurentCard
          id="1234"
          title="Al Bek"
          imgUrl="https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=400"
          rating={4.2}
          genre="Hyderabadi"
          address="RT Nagar"
          short_description="Foodies Served with Delicious Food"
          dishes="Biryani, Khuskha"
          long={12.5}
          lat={122.3}
        ></RestaurentCard>
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
