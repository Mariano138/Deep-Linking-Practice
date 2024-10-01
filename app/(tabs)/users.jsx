import { Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Linking from "expo-linking";

const users = () => {
  /*El on press de button abre la app de telefono predeterminada, 
  sirve para abrir otras apps como sms o gmail*/
  return (
    <SafeAreaView>
      <Text>Hi users:</Text>
      <Button
        title="Add a number phone"
        onPress={() => Linking.openURL("tel:")}
      />
    </SafeAreaView>
  );
};

export default users;
