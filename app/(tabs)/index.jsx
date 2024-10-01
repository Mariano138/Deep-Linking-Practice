import { Button, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Linking from "expo-linking";
import AppLink from "react-native-app-link";

const index = () => {
  /* Esta funcion comprueba si tengo la app facebook instalada primero, 
  si es asi la abre, 
  si no te dirige a la playstore/appstore para instalarla primero*/
  const downloadOrOpen = () => {
    AppLink.maybeOpenURL("facebook.com", {
      appName: "facebook",
      appStoreLocale: "us",
      appStoreId: "284882215",
      playStoreId: "com.facebook.katana",
    })
      .then(() => {
        console.log("Open success");
      })
      .catch((error) => {
        console.error("An error ocurred with code: ", error);
      });
  };

  return (
    <SafeAreaView>
      <Text>Open facebook!</Text>

      <Button title="go to!" onPress={downloadOrOpen} />
    </SafeAreaView>
  );
};

export default index;
