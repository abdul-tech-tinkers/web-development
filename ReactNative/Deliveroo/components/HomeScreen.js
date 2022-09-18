import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
  AppRegistry,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState, useEffect } from "react";
import {
  UserIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Headers from "./Headers.js";
import Categories from "./Categories.js";
import FeaturedRow from "./FeaturedRow.js";
import api from "../api/restaurents.js";
import axios from "axios";
import restaurentsData from "../api/restaurents.json";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  /**
   * loads restaurents.
   */
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
    <SafeAreaView className="flex-1 pt-5 bg-white">
      {/* Header */}
      <Headers />

      {/* Search */}
      <View className="flex-row items-center space-x-2 mx-4">
        <View className="flex-row items-center space-x-1 p-1 bg-gray-200 flex-1">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurent And Cuisions"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon
          color="#00CCBB"
          size={20}
        ></AdjustmentsVerticalIcon>
      </View>

      {/*Content*/}

      <ScrollView
        className="flex-1 bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />

        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="special offers for RT Nagar residents"
        ></FeaturedRow>

      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
