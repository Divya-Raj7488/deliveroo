import { SafeAreaView, View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Category from "../components/Category";
import FeaturesCard from "../components/FeaturesCard";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View className="bg-white flex-1">
      {/* NavigationBar */}
      <View className="h-24 w-screen items-end flex-row">
        <View>
          <Image
            source={{
              uri:
                "https://tse3.mm.bing.net/th?id=OIP.DvOvIJ-XTfMgFKreCxzM7gHaE7&pid=Api&P=0",
            }}
            className="w-12 h-12 bg-white rounded-full mx-2 px-4"
          />
        </View>
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-s">Deliver Here</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Seachbar */}
      <View className="flex-row h-12 items-center mt-2 mb-1">
        <View className="flex-1 mx-3 bg-gray-100">
          {/* <SearchIcon/> */}
          <TextInput
            placeholder="Search for Restaurents"
            className="h-10 mx-2"
          />
        </View>
        <AdjustmentsVerticalIcon size={30} color="#00CCBB" />
      </View>
      {/* body */}
      <View>
        <Category />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="my-4">
        {/* Offers Near you */}
        <View>
          <FeaturesCard
            heading="Offers Near you"
            description="Lorem ipsum dolor sit Lorem ipsum dolor sit amet"
          />
        </View>
        {/* Features */}
        <View>
          <FeaturesCard
            heading="Features"
            description="Lorem ipsum dolor sit Lorem ipsum dolor sit amet"
          />
        </View>
        {/* Tasty Discounts */}
        <View>
          <FeaturesCard
            heading="Tasty Discounts"
            description="Lorem ipsum dolor sit Lorem ipsum dolor sit amet"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
