import React, { useState } from "react";
import { Pressable, View } from "react-native";
import tw from "twrnc";
import Animated from "react-native-reanimated";

import { positions, positionStyling } from "./config";

const SwipeModal = ({
  position,
  modalStyle,
  onClose,
  body,
  modalBodyStyle,
  closeOnBackdropPress,
}) => (
  <Pressable
    style={[
      tw`w-full h-full absolute flex-1 bg-transparent
         ${position === "left" || position === "right" ? "flex-row" : null}`,
    ]}
  >
    {(position === "right" || position === "bottom") &&
      closeOnBackdropPress && (
        <Pressable style={tw`h-full flex-1`} onPress={onClose} />
      )}
    <Animated.View
      style={[
        tw`h-50 w-50 absolute bg-slate-400 z-10`,
        positionStyling(position),
        modalStyle,
      ]}
      entering={positions[position].animation.slideIn}
      exiting={positions[position].animation.slideOut}
    >
      <View style={[tw`p-5 pt-12.5`, modalBodyStyle]}>{body()}</View>
    </Animated.View>
    {(position === "left" || position === "top") && closeOnBackdropPress && (
      <Pressable style={tw`flex-1`} onPress={onClose} />
    )}
  </Pressable>
);

export default SwipeModal;
