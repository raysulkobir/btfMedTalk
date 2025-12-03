import "./global.css";             // 👈 REQUIRED

import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className="text-3xl font-bold text-white">
        Hello Tailwind + Expo 👋
      </Text>
    </View>
  );
}
