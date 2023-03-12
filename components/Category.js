import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './Categorycard'

const Category = () => {
  return (
   <ScrollView
   contentContainerStyle={{
    paddingHorizontal: 15,
    paddingTop: 10,
   }}
   horizontal
   showsHorizontalScrollIndicator={false}
    >
    <CategoryCard title='Offers' imageUrl='https://tse2.mm.bing.net/th?id=OIP.R1xaCVpmYeewpbClrYbopAHaD4&pid=Api&P=0' />
    <CategoryCard title='Pizza'  imageUrl='https://tse2.mm.bing.net/th?id=OIP.T-Ea6zGGsLzZn3NlIjR0HwHaE8&pid=Api&P=0'/>
    <CategoryCard title='Biryani' imageUrl='https://tse3.mm.bing.net/th?id=OIP.pA3QV9le3tWkxzb9gqli0gHaFj&pid=Api&P=0' />
    <CategoryCard title='Momos' imageUrl='https://tse1.mm.bing.net/th?id=OIP.iveqDq16UcuV5vGlcHAYMgHaEK&pid=Api&P=0' />
    <CategoryCard title='Drinks' imageUrl='https://tse2.mm.bing.net/th?id=OIP.LOnoMVGZVGoUWYM2XXV5bgHaDV&pid=Api&P=0' />
    
    
   </ScrollView>
  )
}

export default Category