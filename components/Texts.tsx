import React from "react";
import { Text } from "react-native";

export const TextBase = ({ value = "Text", style = {} }) => {
  return (
    <Text className="" style={{ fontFamily: "IBMPlexSansLight", ...style }}>
      {value}
    </Text>
  );
};

export const BoldText = ({
  value = "Text",
  fontSize = 16,
  color = "#000000",
  className = "",
}) => {
  return (
    <Text
      style={{
        fontFamily: "IBMPlexSansBold",
        fontSize: fontSize,
        fontWeight: 500,
        color: color,
      }}
      className={className}
    >
      {value}
    </Text>
  );
};

export const SemiBoldText = ({
  value = "Text",
  fontSize = 28,
  color = "#000000",
  className = "",
}) => {
  return (
    <Text
      style={{
        fontFamily: "IBMPlexSansSemiBold",
        fontSize: fontSize,
        fontWeight: 500,
        color: color,
      }}
      className={className}
    >
      {value}
    </Text>
  );
};

export const SemiBoldTextWithLineHeight = ({
  value = "Text",
  fontSize = 17,
  color = "#000000",
  className = "",
}) => {
  return (
    <Text
      style={{
        fontFamily: "IBMPlexSansSemiBold",
        fontSize: fontSize,
        fontWeight: 500,
        lineHeight: 22,
        color: color,
      }}
      className={className}
    >
      {value}
    </Text>
  );
};

export const MediumText = ({
  value = "Text",
  fontSize = 17,
  color = "#000000",
  className = "",
}) => {
  return (
    <Text
      style={{
        fontFamily: "IBMPlexSansMedium",
        fontSize: fontSize,
        fontWeight: 500,
        // lineHeight: 22,
        color: color,
      }}
      className={className}
    >
      {value}
    </Text>
  );
};

export const MediumTextWithLineHeight = ({
  value = "Text",
  fontSize = 17,
  color = "#000000",
  className = "",
}) => {
  return (
    <Text
      style={{
        fontFamily: "IBMPlexSansMedium",
        fontSize: fontSize,
        fontWeight: 500,
        lineHeight: 22,
        color: color,
      }}
      className={className}
    >
      {value}
    </Text>
  );
};

export const RegularText = ({
  value = "Text",
  fontSize = 17,
  color = "#000000",
  className = "",
}) => {
  return (
    <Text
      style={{
        fontFamily: "IBMPlexSansRegular",
        fontSize: fontSize,
        fontWeight: 400,
        color: color,
      }}
      className={className}
    >
      {value}
    </Text>
  );
};

export const RegularTextWithLineHeight = ({
  value = "Text",
  fontSize = 17,
  color = "#000000",
  className = "",
}) => {
  return (
    <Text
      style={{
        fontFamily: "IBMPlexSansRegular",
        fontSize: fontSize,
        fontWeight: 400,
        lineHeight: 24,
        color: color,
      }}
      className={className}
    >
      {value}
    </Text>
  );
};

export const LightText = ({
  value = "Text",
  fontSize = 17,
  color = "#000000",
  className = "",
}) => {
  return (
    <Text
      style={{
        fontFamily: "IBMPlexSansLight",
        fontSize: fontSize,
        fontWeight: 400,
        color: color,
      }}
      className={className}
    >
      {value}
    </Text>
  );
};

export const ThinText = ({
  value = "Text",
  fontSize = 17,
  color = "#000000",
  className = "",
}) => {
  return (
    <Text
      style={{
        fontFamily: "IBMPlexSansThin",
        fontSize: fontSize,
        fontWeight: 400,
        color: color,
      }}
      className={className}
    >
      {value}
    </Text>
  );
};
