import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../../features/home/screens/HomeScreen';
// import TodoScreen from '../../features/todo/screens/TodoScreen';
// import CounterScreen from '../../features/counter/screens/CounterScreen';
import InitialScreen from '@/features/auth/screens/InitialScreen';
import HomeScreen from '@/features/home/screens/HomeScreen';
import OnBoardingScreen from '@/features/onboarding/screens/onboardingScreen';
import LoginScreen from '@/features/auth/screens/LoginScreen';
import RegisterScreen from '@/features/singUp/screens/RegisterScreen';
import { Colors } from '@/ui/theme/colors';
import VerifyPhoneNumberScreen from '@/features/verifyPhoneNumber/screens/VerifyPhoneNumberScreen';
import OtpVerificationScreen from '@/features/otpVerification/screens/OtpVerificationScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="InitialScreen"
        >
            <Stack.Screen name="InitialScreen" component={InitialScreen} />
            <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="VerifyPhoneNumber" component={VerifyPhoneNumberScreen} />
            <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} />
            {/* <Stack.Screen
                name="guide"
                component={GuideScreen}
                options={{
                    headerShown: false,
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Colors.primary },
                    headerTintColor: '#fff',
                }}
            /> */}

            {/* <Stack.Screen
                name="paysZakat"
                component={PaysZalatScreen}
                options={{
                    headerShown: true,
                    title: 'About Zakat',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Colors.primary },
                    headerTintColor: '#fff',
                }}
            /> */}
{/* 
            <Stack.Screen
                name="ZakatCalculator"
                component={ZakatCalculatorScreen}
                options={{
                    headerShown: true,
                    title: 'About Zakat',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: Colors.primary },
                    headerTintColor: '#fff',
                }}
            /> */}
            {/* <Stack.Screen name="Todo" component={TodoScreen} /> */}
            {/* <Stack.Screen name="Counter" component={CounterScreen} /> */}
        </Stack.Navigator>
    );
}
