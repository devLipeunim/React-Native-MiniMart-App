import { TextBase } from "@/components/Texts";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ToastProps } from "react-native-toast-notifications/lib/typescript/toast";

type Iprops = {
  toast: ToastProps;
};

export const Success = ({ toast }: Iprops) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 10,
        width: "90%",
        marginBottom: 6,
        padding: 16,
        position: "relative",
      }}
    >
      <View
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 6,
          backgroundColor: "#00B386",
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      />
      <Ionicons
        name="checkmark-circle-outline"
        size={24}
        color="#00B386"
        style={{ marginHorizontal: 10 }}
      />
      <TextBase
        style={{
          flex: 1,
          fontSize: 16,
          fontWeight: "500",
          color: "#334155",
          fontFamily: "IBMPlexSemiBold",
        }}
        value={toast.message as string}
      />
      <TouchableOpacity onPress={() => toast.onHide()}>
        <Ionicons name="close" size={20} color="#334155" />
      </TouchableOpacity>
    </View>
  );
};

export const Error = ({ toast }: Iprops) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 10,
        width: "90%",
        marginBottom: 6,
        padding: 16,
        position: "relative",
      }}
    >
      <View
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 6,
          backgroundColor: "#FD0403",
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      />
      <Ionicons
        name="close-circle-outline"
        size={24}
        color="#FD0403"
        style={{ marginHorizontal: 10 }}
      />
      <TextBase
        style={{
          flex: 1,
          fontSize: 16,
          fontWeight: "500",
          color: "#334155",
          fontFamily: "IBMPlexSemiBold",
        }}
        value={toast.message as string}
      />
      <TouchableOpacity onPress={() => toast.onHide()}>
        <Ionicons name="close" size={20} color="#334155" />
      </TouchableOpacity>
    </View>
  );
};
