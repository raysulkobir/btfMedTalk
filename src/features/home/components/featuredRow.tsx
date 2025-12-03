import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Card from './card'

const FeaturedRow = () => {
  return (
    <View>
        <View className="flex-row justify-between items-center mb-4">
            <View className="">
                <Text className="font-bold text-lg">Featured</Text>
                <Text className="text-gray-500 font-semibold text-sm"> Lorem ipsum dolor sit amet consectetur </Text>
            </View>

              <TouchableOpacity>
                  <Text className="text-primary px-4 text-lg mt-1 font-bold ">See All</Text>
              </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {/* Card  */}   
              <Card/>
              <Card/>

          </ScrollView>
    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})