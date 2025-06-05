import React from "react";
import { Platform, ScrollView, StatusBar, View } from "react-native";
import TopSpace from "./TopSpace";

type Iprops = {
  children: React.ReactNode;
  isScrollActive?: boolean;
  backgroundColor?: string;
};

const Wrapper = ({
  children,
  isScrollActive = false,
}: Iprops) => {
  return (
    <View className="flex-1 bg-white">
      {Platform.OS === "ios" ? (
        <StatusBar barStyle="dark-content" />
      ) : (
        <StatusBar
          translucent
          backgroundColor={"#fff"}
          barStyle="dark-content"
        />
      )}
      <TopSpace />

      {isScrollActive ? <ScrollView>{children}</ScrollView> : <>{children}</>}
    </View>
  );
};

export default Wrapper;
