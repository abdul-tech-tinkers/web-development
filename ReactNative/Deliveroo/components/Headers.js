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
const Headers = () => {
  return (
    <View className="flex flex-row items-center mx-4 space-x-2 my-4">
      <Image
        source={{ uri: "https://links.papareact.com/wru" }}
        className="h-7 w-7 p-4 rounded-full bg-gray-300"
      />
      <View className="flex-1">
        <Text className="font-bold text-xs text-gray-400">Deliver Now!</Text>
        <Text className="font-bold text-xl">
          Current Location
          <ChevronDownIcon
            className="mt-1"
            size={20}
            color="#00CCBB"
          ></ChevronDownIcon>
        </Text>
      </View>
      <UserIcon size={35} color="#00CCBB" />
    </View>
  );
};
export default Headers;
