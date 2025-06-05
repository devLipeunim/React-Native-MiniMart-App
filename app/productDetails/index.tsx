import { Btn } from "@/components/Buttons";
import BackHeader from "@/components/headers/BackHeader";
import FrontHeader from "@/components/headers/FrontHeader";
import {
  BoldText,
  RegularText,
  RegularTextWithLineHeight,
} from "@/components/Texts";
import Wrapper from "@/components/Wrapper";
import { Colors } from "@/constants/Colors";
import { useCartStore } from "@/store/useCartStore";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import { AntDesign } from "@expo/vector-icons";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import Animated, { ZoomInLeft } from "react-native-reanimated";
import { Toast } from "react-native-toast-notifications";

const ProductDetails = () => {
  //@ts-ignore
  const { params } = useRoute();
  //@ts-ignore
  const passedData = params?.data;
  const isScreenFocused = useIsFocused();

  const { toggleFavorite, isFavorite } = useFavoriteStore();
  const isFav = isFavorite(passedData.id);

  const { addToCart, cart } = useCartStore();

  const isInCart = cart.some((item) => item.id === passedData.id);

  return (
    <Wrapper>
      <SafeAreaView className="flex-1 bg-white">
        <FrontHeader />

        <BackHeader title="Go Back" width={"28%"} />

        <Animated.ScrollView
          key={isScreenFocused ? "focused" : "unfocused"}
          entering={ZoomInLeft.duration(1000)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          className="w-[95%] mx-auto pl-1 pr-1 bg-[#FBFBFB] mt-3"
        >
          <View className="flex-col items-center justify-center relative mb-2">
            <Image
              style={{
                width: 334,
                height: 332,
                borderRadius: 15,
                marginBottom: 3,
              }}
              contentFit="contain"
              transition={1000}
              source={passedData.image}
            />
            <TouchableOpacity
              onPress={() => {
                toggleFavorite(passedData);
                Toast.show(`Favorites updated`, {
                  type: "miniMart_success",
                  duration: 3000,
                });
              }}
              className="absolute top-[10px] right-[30px] w-[44px] h-[44px] rounded-full bg-white flex-row justify-center items-center "
            >
              {isFav ? (
                <AntDesign name="heart" size={20} color="red" />
              ) : (
                <AntDesign name="hearto" size={20} color="black" />
              )}
            </TouchableOpacity>
          </View>

          <RegularText fontSize={17} value={passedData.name} />
          <BoldText
            fontSize={32.75}
            value={`$${passedData.price.toFixed(2)}`}
            className="mt-2 mb-2"
          />
          <RegularTextWithLineHeight
            color={Colors.primary.secondaryGray}
            fontSize={14}
            value={passedData.description}
          />
        </Animated.ScrollView>

        <View className="w-[95%] mx-auto h-24 flex-col justify-center items-center">
          <Btn
            color="#fff"
            value={isInCart ? "Add Again" : "Add to Cart"}
            onPressHandler={() => {
              addToCart(passedData);
              Toast.show(`Item has been added to cart`, {
                type: "miniMart_success",
                duration: 3000,
              });
            }}
          />
        </View>
      </SafeAreaView>
    </Wrapper>
  );
};

export default ProductDetails;
