import catImage from '@/assets/images/categories/icons8-pizza-96.png';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';


export default function Category() {
    const [activeCategory, setActiveCategory] = useState()

    console.log("activeCategory", activeCategory)
    const categories = [
        { id: 1, name: "Pizza", image: catImage },
        { id: 2, name: "Burger", image: catImage },
        { id: 3, name: "Chicken", image: catImage },
        { id: 4, name: "Drinks", image: catImage },
        { id: 4, name: "Drinks", image: catImage },
        { id: 4, name: "Drinks", image: catImage }, { id: 4, name: "Drinks", image: catImage },
 
    ];

    
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            className="overflow-visible"
        >
            {categories.map((item) => {
                let isActive = item.id === activeCategory;
                let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200'
                let textColor = isActive ? 'text-gray-800' : 'text-gray-500'

                return (
                    <View key={item.id} className="flex justify-center items-center mr-3">
                        <TouchableOpacity
                            onPress={() => setActiveCategory(item.id)}
                            
                            className={"p-1 rounded-full justify-center items-center " + btnClass}
                        >
                            <Image style={{ width: 45, height: 45 }} source={item.image} />
                        </TouchableOpacity>
                        <Text className={"text-sm mt-2 " + textColor}>{item.name}</Text>
                    </View>
                )
            })}
        </ScrollView>

    )
}

