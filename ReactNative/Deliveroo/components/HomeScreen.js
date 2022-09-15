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
      <View className="flex flex-row pb-3 items-center mx-4 space-x-2 my-4">
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

      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
