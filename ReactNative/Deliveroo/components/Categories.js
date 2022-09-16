import { View, Text, ScrollView } from "react-native";
import React from "react";
import Category from "./Category";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Category name="Fried Eggs" imgUrl="https://links.papareact.com/gn7" />
      <Category
        name="Roles"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400"
      />
      <Category
        name="Biryani"
        imgUrl="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400"
      />
      <Category
        name="Pizza"
        imgUrl="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400"
      />
      <Category
        name="Sandwich"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400"
      />
      <Category
        name="Roti"
        imgUrl="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400"
      />
      <Category
        name="Noodles"
        imgUrl="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400"
      />
      <Category
        name="Cucumber"
        imgUrl="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=400"
      />
    </ScrollView>
  );
};

export default Categories;
