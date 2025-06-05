/* eslint-disable no-unused-expressions */
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { DimensionValue, TouchableOpacity, View } from "react-native";
import { BoldText } from "../Texts";
type TProps = {
  title: string;
  width?: DimensionValue;
  isPressHandler?: boolean;
  pressHandler?: () => void;
};
const BackHeader = ({
  title = "Title",
  width = "29%",
  isPressHandler = false,
  pressHandler = () => {},
}: TProps) => {
  const router = useRouter();

  return (
    <View className="w-[95%] mx-auto pl-1 pr-1 pb-2 pt-2 border-[#E2E8F0] border-t border-b">
      <View
        style={{ width: width }}
        className="flex-row items-center justify-between "
      >
        <TouchableOpacity
          onPress={() => {
            isPressHandler ? pressHandler() : router.back();
          }}
        >
          <Ionicons name="chevron-back" size={15} color="#64748B" />
        </TouchableOpacity>
        <View>
          <BoldText fontSize={18} value={title} />
        </View>
      </View>
    </View>
  );
};

export default BackHeader;
