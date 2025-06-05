import { View, Platform } from "react-native";
import React from "react";

const TopSpace = () => {
  return <View className={`${Platform.OS === "ios" ? "" : "mt-[44px]"}`} />;
};

export default TopSpace;
