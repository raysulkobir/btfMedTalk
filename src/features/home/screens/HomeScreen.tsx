import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '@/utils/icons'

export default function HomeScreen() {
  return (
    <SafeAreaView className='flex-1 bg-appbg'>
      <View className="flex flex-row items-center justify-between bg-white px-4 h-24">
        {/* Left: Greeting */}
        <View>
          <Text className="text-black text-4xl">Good morning,</Text>
          <Text className="text-2xl font-bold text-primary">Sarah!</Text>
        </View>

        {/* Right: Icons */}
        <View className="flex flex-row items-center space-x-3 gap-4">
          {/* Notification Button */}
          <View className="relative">
            <View className="bg-primary-200 w-12 h-12 rounded-full flex items-center justify-center">
              <Image
                source={icons.notificationIcon}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </View>

            {/* Badge */}
            <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
              <Text className="text-xs font-bold text-white">3</Text>
            </View>
          </View>

          {/* User Avatar / Profile Button */}
          <View className="bg-primary-200 w-12 h-12 rounded-full flex items-center justify-center">
            <Image
              source={icons.userIcon}
              className="w-7 h-7"
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <View className='px-4'>
        <Text className='text-3xl font-bold my-4'>Quick Actions</Text>

       <View className="flex flex-row items-center justify-between">
          <View className='bg-primary rounded-[2vw] p-7 items-center justify-center w-[48%]'>
            <Image className='justify-center mb-2' source={icons.calendar} resizeMode='contain'/>
            <Text className='text-white text-lg font-bold'>Book</Text>
            <Text className='text-white text-lg font-bold'>Appointment</Text>
          </View>

          <View className='bg-primary rounded-[2vw] p-7 items-center justify-center w-[48%]'>
            <Image className='justify-center mb-2' source={icons.findIcon} resizeMode='contain' />
            <Text className='text-white text-lg font-bold'> Find</Text>
            <Text className='text-white text-lg font-bold'> Doctor</Text>
          </View>
       </View>

        {/* Upcoming section  */}
      <Text className='text-3xl font-bold my-5'>Upcoming Appointments</Text>
        <View className="flex flex-row items-center justify-between rounded-lg py-4 bg-white px-4 border border-[#E5E5E5]">
          <View className='bg-primary-100 w-20 h-20 justify-center items-center rounded-full'>
            <Image source={icons.userIcon} className='h-5 w-5' resizeMode="contain" />
          </View>
          <View className=''>
            <Text className="font-bold text-primary text-[16px] text-justify">Dr. Michael Chen</Text>
            <Text className="font-bold text-[#777777] text-base py-2">Cardiologist • Video Call</Text>
            <Text className='font-bold text-primary'>Today, 2:30 PM</Text>
          </View>
          <View className='bg-primary px-6 py-2 rounded-full'>
            <Text className='text-white text-lg font-bold'>JOIN</Text>
          </View>
      </View>

        {/* Featured Doctors  */}
        <Text className='text-3xl font-bold my-5'>Featured Doctors</Text>

        <View className="flex flex-row items-center justify-between rounded-lg py-4 bg-white px-4 border border-[#E5E5E5] mb-2">
          <View className='bg-primary w-10 h-10 justify-center items-center rounded-full'>
            <Text className='text-white text-lg font-bold'>JH</Text>
          </View>
          <View className=''>
            <Text className="font-bold text-primary text-[16px] text-justify">Dr. Michael Chen</Text>
            <Text className="font-bold text-[#777777] text-base py-2">Cardiologist • 15 years exp</Text>
            <Text className='font-bold text-primary'>⭐ 4.8 (124 reviews)</Text>
          </View>
          <View className='bg-primary px-6 py-2 rounded-full'>
            <Text className='text-white text-lg font-bold'>Book</Text>
          </View>
        </View>

        <View className="flex flex-row items-center justify-between rounded-lg py-4 bg-white px-4 border border-[#E5E5E5] mb-2">
          <View className='bg-primary w-10 h-10 justify-center items-center rounded-full'>
            <Text className='text-white text-lg font-bold'>JH</Text>
          </View>
          <View className=''>
            <Text className="font-bold text-primary text-[16px] text-justify">Dr. Michael Chen</Text>
            <Text className="font-bold text-[#777777] text-base py-2">Cardiologist • 15 years exp</Text>
            <Text className='font-bold text-primary'>⭐ 4.8 (124 reviews)</Text>
          </View>
          <View className='bg-primary px-6 py-2 rounded-full'>
            <Text className='text-white text-lg font-bold'>Book</Text>
          </View>
        </View>
        
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
