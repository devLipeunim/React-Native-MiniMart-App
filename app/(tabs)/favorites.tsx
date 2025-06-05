import BackHeader from "@/components/headers/BackHeader";
import FrontHeader from "@/components/headers/FrontHeader";
import Wrapper from "@/components/Wrapper";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import React from "react";

import { BoldText, RegularTextWithLineHeight } from "@/components/Texts";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import { Product } from "@/types";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import Animated, { ZoomInLeft } from "react-native-reanimated";

const Favorites = () => {
  const navigation = useNavigation();
  const isScreenFocused = useIsFocused();
  const { favorites } = useFavoriteStore();

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity
      className=""
      onPress={() =>
        // @ts-ignore
        navigation.navigate("productDetails/index", { data: item })
      }
    >
      <Image
        style={{ width: 152, height: 152, borderRadius: 8.62, marginBottom: 3 }}
        contentFit="contain"
        transition={1000}
        source={item.image}
      />

      <RegularTextWithLineHeight value={item.name} className="w-[152px]" />
      <BoldText value={`$${item.price.toFixed(2)}`} />
    </TouchableOpacity>
  );
  return (
    <Wrapper>
      <SafeAreaView className="flex-1 bg-white">
        <FrontHeader />

        <BackHeader title="Your Favorites" width={"38%"} />

        <View className="w-full bg-[#FBFBFB] mt-4">
          <View className="w-[90%] mx-auto pl-1 pr-1">
            <Animated.FlatList
              key={isScreenFocused ? "focused" : "unfocused"}
              entering={ZoomInLeft.duration(1000)}
              data={favorites}
              keyExtractor={(item) => item.id}
              renderItem={renderProduct}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 300 }}
              columnWrapperStyle={{
                width: "100%",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
              numColumns={2}
            />
          </View>
        </View>
      </SafeAreaView>
    </Wrapper>
  );
};

export default Favorites;
