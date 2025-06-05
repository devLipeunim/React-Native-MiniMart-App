import BackHeader from "@/components/headers/BackHeader";
import FrontHeader from "@/components/headers/FrontHeader";
import {
  BoldText,
  MediumText,
  RegularTextWithLineHeight,
} from "@/components/Texts";
import Wrapper from "@/components/Wrapper";
import { Colors } from "@/constants/Colors";
import { products } from "@/data/products";
import { Product } from "@/types";
import { Feather } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import React, { useState } from "react";
import { SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import Animated, { ZoomInLeft } from "react-native-reanimated";

const Home = () => {
  const navigation = useNavigation();
  const isScreenFocused = useIsFocused();
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Wrapper>
      <SafeAreaView className="flex-1 bg-white">
        <FrontHeader />

        <View className="w-[95%] mx-auto pl-1 pr-1 mb-1">
          <View
            style={{ paddingHorizontal: 12 }}
            className={`flex-row items-center border rounded-[5px] h-[36px] mb-3 ${
              isFocused ? "border-[#60B5FF]" : "border-[#E2E8F0]"
            }`}
          >
            <Feather name="search" size={20} color="#94A3B8" className="mr-2" />
            <TextInput
              placeholder="Search..."
              value={searchTerm}
              onChangeText={setSearchTerm}
              onFocus={() => setIsFocused(true)}
              cursorColor={Colors.primary.blue}
              onBlur={() => setIsFocused(false)}
              className={`flex-1 text-black text-[14px]`}
              style={{
                fontFamily: "IBMPlexSansRegular",
              }}
              placeholderTextColor="#CBD5E1"
            />
          </View>
        </View>

        <BackHeader title="Technology" />

        <View className="w-full bg-[#FBFBFB] mt-3">
          {filteredProducts.length > 0 && (
            <View className="w-[95%] mx-auto pl-1 pr-1 mb-4">
              <MediumText
                fontSize={18}
                value="Smartphones, Laptops & accessories"
              />
            </View>
          )}

          <View className="w-[90%] mx-auto pl-1 pr-1">
            {filteredProducts.length === 0 ? (
              <View className="flex-col items-center justify-center">
                <MediumText fontSize={16} value="No results found" />
              </View>
            ) : (
              <Animated.FlatList
                key={isScreenFocused ? "focused" : "unfocused"}
                entering={ZoomInLeft.duration(1000)}
                data={filteredProducts}
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
            )}
          </View>
        </View>
      </SafeAreaView>
    </Wrapper>
  );
};

export default Home;
