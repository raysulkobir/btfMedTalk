import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "@/store";             // ✅ alias
import { increment, decrement } from "@/features/home/state/counterSlice"; // ✅ alias

export default function HomeScreen() {
  const value = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className="text-white text-3xl mb-4">Counter: {value}</Text>

      <View className="flex-row gap-4">
        <Button title="+" onPress={() => dispatch(increment())} />
        <Button title="-" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
}
