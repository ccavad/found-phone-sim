import { createBox } from "@shopify/restyle";
import React from "react";
import { View } from "react-native";

export const SideMenu = () => {
  const Box = createBox();
  return (
    <Box
      width={60}
      height={150}
      backgroundColor="primary"
      position="absolute"
      right={0}
      bottom={200}
      borderTopLeftRadius="m"
      borderBottomLeftRadius="m"
    ></Box>
  );
};
