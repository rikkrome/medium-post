import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { colors, fonts, WIDTH } from "../styles";

export default function ButtonCTA({ style, title, onPress }) {
  let _width = WIDTH / 2;
  let _height = 50;
  let _style = typeof style === "object" ? { ...style } : {};
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: _width,
        height: _height,
        backgroundColor: colors.mainColors.midBlue,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        ..._style
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ ...fonts.Heading.h4, color: colors.mainColors.white }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

{
  /* <Button
          title={title}
          onPress={onPress}
          color={colors.mainColors.white}
        /> */
}
