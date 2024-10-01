import React from "react";
import { Stack } from "expo-router";
import { ScreenStack } from "react-native-screens";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}
