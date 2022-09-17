import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
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
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 pt-5 bg-white">
      {/* Header */}
      <Headers />

      {/* Search */}
      <View className="flex-row items-center space-x-2 mx-4">
        <View className="flex-row items-center space-x-1 p-1 bg-gray-200 flex-1">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurnet And Cuisions"
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
          id="123"
          title="Featured"
          description="Bengaluru love these foods"
        ></FeaturedRow>

        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="my feature row description"
        ></FeaturedRow>

        <FeaturedRow
          id="12345"
          title="Offer near you!"
          description="my feature row description"
        ></FeaturedRow>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
