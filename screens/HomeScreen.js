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
import Category from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View className="bg-white">
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
      <View className="flex-row h-10 items-center mt-4 mb-0.5">
        <View className="flex-1 mx-3 bg-gray-100">
          {/* <SearchIcon/> */}
          <TextInput placeholder="Search for Restaurents" className="h-12 " />
        </View>
        <AdjustmentsVerticalIcon size={30} color="#00CCBB" />
      </View>

      {/* body */}
      <ScrollView
      
      // className="bg-gray-100"
      // contentContainerStyle={{
      //   paddingBottom: 100,
      // }}
      >
        <Category />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
