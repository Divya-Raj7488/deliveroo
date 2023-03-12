import { View, Text, TouchableOpacity,Image } from "react-native";
import React from "react";

const CategoryCard = ({ title, imageUrl }) => {
  return (
    <TouchableOpacity className="relative mx-0.5">
      <Image
        source={{
          uri: imageUrl
        }}
        className="h-24 w-24 rounded"
      />
      <Text className="text-white absolute bottom-1 font-bold ml-0.5">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
