import { MediumText, SemiBoldText } from "@/components/Texts";
import { useCartStore } from "@/store/useCartStore";
import {
  FavouriteIcon,
  Home07Icon,
  ShoppingCart01Icon,
  UserCircle02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const TabsLayout = () => {
  const insets = useSafeAreaInsets();
  const totalQuantity = useCartStore((state) => state.getTotalQuantity());

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "white",
            height: 70 + insets.bottom,
            paddingTop: 10,
            paddingBottom: 10 + insets.bottom,
          },
          tabBarHideOnKeyboard: true,
          tabBarLabelStyle: {
            fontFamily: "IBMPlexSansMedium",
            fontSize: 12,
          },
          tabBarActiveTintColor: "#60B5FF",
          headerStyle: {},
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  backgroundColor: focused ? "#60B5FF" : "",
                  width: 56,
                  height: 32,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  borderRadius: 16,
                  marginBottom: 8,
                }}
              >
                <HugeiconsIcon
                  icon={Home07Icon}
                  size={20}
                  color={focused ? "#FFF" : "#000000"}
                />
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <SemiBoldText
                value="Home"
                color={focused ? "#60B5FF" : "#49454F"}
                fontSize={12}
              />
            ),
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "relative",
                  backgroundColor: focused ? "#60B5FF" : "",
                  width: 56,
                  height: 32,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  borderRadius: 16,
                  marginBottom: 8,
                }}
              >
                <HugeiconsIcon
                  icon={ShoppingCart01Icon}
                  size={20}
                  color={focused ? "#FFF" : "#000000"}
                />
                {totalQuantity > 0 && (
                  <View
                    style={{
                      position: "absolute",
                      top: 6,
                      right: 10,
                      backgroundColor: "#3C4856",
                      borderRadius: 10,
                      paddingHorizontal: 6,
                      paddingVertical: 2,
                    }}
                  >
                    <MediumText
                      value={`${totalQuantity}`}
                      color="white"
                      fontSize={10}
                    />
                  </View>
                )}
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <SemiBoldText
                value="Cart"
                color={focused ? "#60B5FF" : "#49454F"}
                fontSize={12}
              />
            ),
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  backgroundColor: focused ? "#60B5FF" : "",
                  width: 56,
                  height: 32,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  borderRadius: 16,
                  marginBottom: 8,
                }}
              >
                <HugeiconsIcon
                  icon={FavouriteIcon}
                  size={20}
                  color={focused ? "#FFF" : "#000000"}
                />
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <SemiBoldText
                value="Favorites"
                color={focused ? "#60B5FF" : "#49454F"}
                fontSize={12}
              />
            ),
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  backgroundColor: focused ? "#60B5FF" : "",
                  width: 56,
                  height: 32,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  borderRadius: 16,
                  marginBottom: 8,
                }}
              >
                <HugeiconsIcon
                  icon={UserCircle02Icon}
                  size={20}
                  color={focused ? "#FFF" : "#000000"}
                />
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <SemiBoldText
                value="Profile"
                color={focused ? "#60B5FF" : "#49454F"}
                fontSize={12}
              />
            ),
            headerShown: false,
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};
export default TabsLayout;
