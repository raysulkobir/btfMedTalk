import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/utils/images'
import CommonButton from '../../../ui/components/CommonButton'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '@/ui/theme/colors'

export default function OnBoardingScreen() {
    const navigation = useNavigation<any>();

    return (
        <SafeAreaView className='px-4 flex-1 bg-[#F8FAFB]'>
            <Image className='center' source={images.onboardingImage} />
            <Text className='font-bold text-primary text-[32px] text-justify'>Your Wellness {"\n"} Journey Starts here</Text>
            <Text className='font-bold text-[#777777] text-base py-4'>Book Appointments with Ease, {"\n"} Anytime, Anywhere</Text>

            {/* SIGN IN button – outline */}
            <CommonButton
                title="SIGN IN2"
                onPress={() => navigation.navigate('Login')}
                variant="primary"
                size="md"
                fullWidth
                style={{ height:50,width:200,backgroundColor:"red" }}
                textColor="#00686E"
                backgroundColor="red"
                borderColor={Colors.primary}
                pressedBackgroundColor="#00686E"
                testID="SignInButton"
            />






         
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
