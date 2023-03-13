import { View, Text, Image } from "react-native";
import React from "react";
import {  StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

const RestauroCard = ({ imgUrl, title, Rating, offer, location, genre }) => {
  return (
    <View className='px-1 py-1'>
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <Text className="font-bold text-lg pt-2">{title}</Text>

      <View>
        <View className="flex-row items-center">
          <StarIcon 
          color='green' 
          opacity={0.5} 
          size={22} 
          />
          <Text className='text-gray-500 text-xs px-2'>
            <Text className='text-green-500 text-sm font-bold '>{Rating} </Text>. {genre}
          </Text>
        </View>
        <Text className='font-bold text-green-700 px-1 py-1'>{offer}</Text>
      </View>
      <View className="flex-row items-center">
      <MapPinIcon color='green' opacity={0.5} size={22} />
        <Text className='font-bold px-1'>{location}</Text>
      </View>
    </View>
  );
};

export default RestauroCard;
