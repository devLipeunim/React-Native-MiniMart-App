/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import {
  DimensionValue,
  TouchableOpacity,
} from "react-native";
import { BoldText } from "./Texts";

type BtnProps = {
  value: string;
  btnWidth?: string;
  style?: {};
  containerStyle?: {};
  onPressHandler?: () => void;
  isDisabled?: boolean;
  backgroundColor?: string;
  color?: string;
};

export const Btn = ({
  value = "Button",
  containerStyle = {},
  onPressHandler = () => {},
  btnWidth = "90%",
  color = "",
  isDisabled = false,
  backgroundColor = "#60B5FF",
}: BtnProps) => {
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      disabled={isDisabled}
      style={[
        {
          width: btnWidth as DimensionValue | undefined,
          backgroundColor: backgroundColor,
          ...containerStyle,
        },
      ]}
      className={`h-[44px] rounded-[5px] ${
        isDisabled ? "opacity-50" : ""
      }  mx-auto flex-row justify-center items-center`}
    >
      <BoldText fontSize={14} color={color} value={value} />
    </TouchableOpacity>
  );
};
