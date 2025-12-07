import React, { useState } from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "@/ui/components/Input";
import { Button } from "@/ui/components/Button";
import Ionicons from '@expo/vector-icons/Ionicons';
import { images } from "@/utils/images";
import { OrDivider } from "@/ui/components/OrDivider";
import { icons } from "../../../utils/icons";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F8FAFB]">
      <View className="flex-1 px-4 pb-6">
        <Image
          source={images.loginBanner}
          className="w-full h-100 mx-auto mb-11 mt-30"
          resizeMode="contain"  
        />
        <Text className="text-3xl text-center font-bold text-gray-900">
          Welcome Back
        </Text>
        
        <Text className="text-base text-gray-500 mb-6 text-center">
          Sign in to your account
        </Text>

        <Input
          placeholder="Phone Number"
          value={email}
          onChangeText={setEmail}
          iconName="call-outline"
        />

        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          iconName="lock-closed-outline"
        />

        <TouchableOpacity>
          <Text className="text-primary text-sm font-semibold mb-2 text-right">Forget Password?</Text>
        </TouchableOpacity>
        <Button
          title="SIGN IN"
          variant="primary"
          onPress={handleLogin}
        />

        <OrDivider label="Or" /> 

        <View className="flex-row items-center justify-center gap-9">
          <View className="flex-row items-center justify-center bg-[#fff] py-2 px-2 rounded-full border-r-primary border-500 border-2 mr-2">
            <Image source={icons.googleIcon} className="w-4 h-4" />
          </View>
          <View className="flex-row items-center justify-center bg-[#fff] py-2 px-2 rounded-full border-r-primary border-500 border-2 mr-2">
            <Image source={icons.facebookIcon} className="w-4 h-4" />
          </View>
          <View className="flex-row items-center justify-center bg-[#fff] py-2 px-2 rounded-full border-r-primary border-500 border-2 mr-2">
            <Image source={icons.appleIcon} className="w-4 h-4" />
          </View>
        </View>

        <View className="flex-row items-center justify-center mt-4">
          <Text className="text-sm text-gray-500">Don't have an account? </Text>
          <TouchableOpacity>< Text className="text-sm font-semibold text-primary">Sign Up</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
