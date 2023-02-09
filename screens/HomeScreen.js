import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })

    })

  return (
    <View className="h-20 w-screen items-end flex-row">
        <View>
            <Image
            source={{
                uri: "https://tse3.mm.bing.net/th?id=OIP.DvOvIJ-XTfMgFKreCxzM7gHaE7&pid=Api&P=0",
            }}
            className="w-12 h-12 bg-white rounded-full mx-2"
            />
        </View>
      <Text className="text-red-500">HomeScreen</Text>
    </View>
  )
}

export default HomeScreen