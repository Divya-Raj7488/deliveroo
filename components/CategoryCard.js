import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";

const CategoryCard = ({ title, imgUrl }) => {
  return (
    <TouchableOpacity>
        <Image
          source={{
            uri: imgUrl,
          }}
          className="h-20 w-20 bg-white"
        />

      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
