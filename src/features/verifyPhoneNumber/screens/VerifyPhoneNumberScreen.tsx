import React, { useRef, useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const OtpVerificationScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    // only allow one digit
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    // move to next box automatically
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const otp = code.join("");
    // TODO: call your verify API with `otp`
    console.log("OTP:", otp);
    // navigation.navigate("NextScreen");
  };

  return (
    <SafeAreaView className="flex-1 bg-appbg px-6 pt-4">
      {/* Back button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="w-10 h-10 rounded-full border border-primary-600 items-center justify-center"
      >
        <Ionicons name="arrow-back" size={22} />
      </TouchableOpacity>

      {/* Content */}
      <View className="flex-1 mt-8">
        <Text className="text-2xl font-semibold text-slate-900">
          OTP Verification
        </Text>
        <Text className="text-slate-500 mt-2">
          We have sent a verification code to your phone number.
        </Text>

        {/* OTP boxes */}
        <View className="flex-row justify-between mt-8">
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputsRef.current[index] = ref)}
              className="w-14 h-14 rounded-2xl border border-slate-300 bg-white text-center text-xl font-semibold"
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleChange(value, index)}
              onKeyPress={(e) => handleBackspace(e, index)}
            />
          ))}
        </View>

        {/* Resend + Timer (static example) */}
        <View className="flex-row items-center justify-center mt-4">
          <Text className="text-slate-500">Didn't receive the code? </Text>
          <TouchableOpacity onPress={() => console.log("Resend OTP")}>
            <Text className="text-primary-600 font-semibold">Resend</Text>
          </TouchableOpacity>
          <Text className="text-slate-400 ml-1">(00:30)</Text>
        </View>
      </View>

      {/* Verify button */}
      <TouchableOpacity
        onPress={handleVerify}
        className="mb-8 h-12 rounded-2xl bg-primary-600 items-center justify-center"
      >
        <Text className="text-white font-semibold text-base">
          Verify & Continue
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OtpVerificationScreen;
