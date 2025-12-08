import React, { useState } from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "@/ui/components/Input";
import { Button } from "@/ui/components/Button";
import Ionicons from '@expo/vector-icons/Ionicons';
import { images } from "@/utils/images";
import { OrDivider } from "@/ui/components/OrDivider";
import { icons } from "@/utils/icons";
import { useNavigation } from "@react-navigation/native";

export default function OtpVerificationScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <SafeAreaView className="flex-1 bg-appbg">
      <View className="flex-1 px-4 pb-6">
        <Image
          source={images.loginBanner}
          className="w-full h-100 mx-auto mb-11 mt-30"
          resizeMode="contain"  
        />

        <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-4 left-4 border border-primary-600 rounded-full p-2">
          <Ionicons name="arrow-back" size={24} color="primary" />
        </TouchableOpacity>

        <Text className="text-3xl text-center font-bold text-gray-900">
          Otp Verification
        </Text>
        
        <Text className="text-base text-gray-500 mb-6 text-center">
          We've sent a 6-digit code to +8801xxxxxxxxx
        </Text>

        <Input
          placeholder="Phone Number"
          value={email}
          onChangeText={setEmail}
          iconName="call-outline"
        />
        
        <Button
          title="Get Otp"
          variant="primary"
          onPress={() => navigation.navigate('OtpVerification')}
        />
      </View>
    </SafeAreaView>
  );
}
