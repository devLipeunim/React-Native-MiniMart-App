import { Error, Success } from "@/components/toasts";
import React from "react";
import { Platform } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";

interface IProps {
  children: React.ReactNode;
}

export default function GlobalProvider({ children }: IProps) {
  return (
    <ToastProvider
      placement="top"
      offsetTop={Platform.OS === "android" ? 50 : 0}
      animationType="slide-in"
      renderType={{
        miniMart_success: (toast) => <Success toast={toast} />,
        miniMart_error: (toast) => <Error toast={toast} />,
      }}
    >
      {children}
    </ToastProvider>
  );
}
