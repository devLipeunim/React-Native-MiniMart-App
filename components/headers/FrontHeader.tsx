import { Colors } from "@/constants/Colors";
import { Notification02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import React from "react";
import { View } from "react-native";
import { SemiBoldText } from "../Texts";

const FrontHeader = () => {
  return (
    <View className="w-[95%] mx-auto pl-1 pr-1 flex-row justify-between mb-6">
      <View className="w-[56px] h-[28px] flex-row items-center justify-center border border-[#2563EB] border-dashed bg-[#93C5FD]">
        <SemiBoldText fontSize={11} color="#2563EB" value="Full Logo" />
      </View>

      <View className="flex-col items-center">
        <SemiBoldText
          fontSize={10}
          color={Colors.primary.gray}
          value="DELIVERY ADDRESS"
          className="mb-2"
        />
        <SemiBoldText
          value="Umuezike Road, Oyo State"
          color={Colors.primary.gray}
          fontSize={12}
        />
      </View>

      <HugeiconsIcon
        icon={Notification02Icon}
        size={24}
        color={Colors.primary.primaryGray}
      />
    </View>
  );
};

export default FrontHeader;
