import { Btn } from "@/components/Buttons";
import BackHeader from "@/components/headers/BackHeader";
import FrontHeader from "@/components/headers/FrontHeader";
import {
  BoldText,
  MediumText,
  RegularText,
  SemiBoldText,
} from "@/components/Texts";
import Wrapper from "@/components/Wrapper";
import { Colors } from "@/constants/Colors";
import { useCartStore } from "@/store/useCartStore";
import {
  Delete02Icon,
  MinusSignIcon,
  PlusSignIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Image } from "expo-image";
import React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { Toast } from "react-native-toast-notifications";

const Cart = () => {
  const {
    cart, // Array of cart items
    increaseQuantity, // Function to increase item quantity
    decreaseQuantity, // Function to decrease item quantity
    removeFromCart, // Function to remove item from cart
    clearCart, // Function to clear the cart
    getSubtotal, // Function to calculate subtotal
  } = useCartStore();

  return (
    <Wrapper>
      <SafeAreaView className="flex-1 bg-white">
        <FrontHeader />

        <BackHeader title="Your Cart" />

        {/* Render cart items if cart is not empty */}
        {cart.length > 0 && (
          <>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 100 }}
              className="w-[95%] mx-auto pl-1 pr-1 bg-[#FBFBFB] mt-4"
            >
              {cart.map((item) => (
                <View
                  key={item?.id}
                  className="bg-[#F6F5F8] rounded-2xl p-[10px] flex-row justify-center items-center gap-3 mb-5"
                >
                  <Image
                    style={{
                      width: 102,
                      height: 102,
                      borderRadius: 8.62,
                      marginBottom: 3,
                    }}
                    contentFit="contain"
                    transition={1000}
                    source={item.image}
                  />

                  {/* Product details and actions */}
                  <View className="flex-col">
                    <RegularText
                      fontSize={12}
                      color="#334155"
                      value={item.name}
                    />

                    <SemiBoldText
                      fontSize={17}
                      color="#334155"
                      value={`$${item.price.toFixed(2)}`}
                      className="mt-1 mb-1"
                    />

                    <RegularText
                      fontSize={12}
                      color={Colors.primary.success}
                      value={"In stock"}
                    />

                    {/* Quantity controls and remove button */}
                    <View className="flex-row items-center gap-6 mt-2">
                      <TouchableOpacity
                        onPress={() => decreaseQuantity(item.id)}
                        className="w-[36px] h-[36px] rounded-full bg-[#E2E8F0] flex-row items-center justify-center"
                      >
                        <HugeiconsIcon
                          icon={MinusSignIcon}
                          size={20}
                          color={"#64748B"}
                        />
                      </TouchableOpacity>

                      <RegularText value={`${item.quantity}`} />

                      <TouchableOpacity
                        onPress={() => increaseQuantity(item.id)}
                        className="w-[36px] h-[36px] rounded-full bg-[#fff] border border-[#E2E8F0] flex-row items-center justify-center"
                      >
                        <HugeiconsIcon
                          icon={PlusSignIcon}
                          size={20}
                          color={"#334155"}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => removeFromCart(item.id)}
                        className="w-[36px] h-[36px] rounded-full bg-[#fff] flex-row items-center justify-center"
                      >
                        <HugeiconsIcon
                          icon={Delete02Icon}
                          size={20}
                          color={"#999999"}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}

              {/* Order summary section */}
              <BoldText value="Order Info" className="mt-2" fontSize={14} />
              <View className="w-full flex-row items-center justify-between mt-4">
                <MediumText fontSize={12} value="Subtotal" />
                <MediumText fontSize={12} value={`$${getSubtotal()}`} />
              </View>

              <View className="w-full flex-row items-center justify-between mt-4">
                <MediumText fontSize={12} value="Shipping" />
                <MediumText fontSize={12} value={`$10`} />
              </View>

              <View className="w-full flex-row items-center justify-between mt-4">
                <MediumText fontSize={12} value="Total" />
                <BoldText fontSize={14} value={`$${getSubtotal() + 10}`} />
              </View>
            </ScrollView>

            {/* Checkout button */}
            <View className="w-[95%] mx-auto h-24 flex-col justify-center items-center">
              <Btn
                color="#fff"
                value={`Checkout ($${getSubtotal() + 10})`}
                onPressHandler={() => {
                  // Show success toast on checkout
                  Toast.show(`Checkout successfully`, {
                    type: "miniMart_success",
                    duration: 3000,
                  });
                }}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </Wrapper>
  );
};

export default Cart;
