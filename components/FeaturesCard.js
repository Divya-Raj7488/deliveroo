import { View, Text, Image,ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestauroCard from './RestauroCard'

const FeaturesCard = ({heading,imgUrl,description}) => {
  return (
    <View>
    <View className='flex-row items-center justify-between mt-4 px-4'>
      <Text className='font-bold text-lg'>{heading}</Text>
      <ArrowRightIcon color='#00CCBB' />
    </View>
    <Text className='text-s text-gray-500 mx-4'>{description}</Text>
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
       }}
       horizontal
       showsHorizontalScrollIndicator={false}
    >
        <RestauroCard 
        imgUrl='https://tse2.mm.bing.net/th?id=OIP.T-Ea6zGGsLzZn3NlIjR0HwHaE8&pid=Api&P=0'
        title='Divya'
        Rating='4.5'
        genre='Indian'
        location='Madhuban'
        />
    </ScrollView>
   
    </View>
  )
}

export default FeaturesCard