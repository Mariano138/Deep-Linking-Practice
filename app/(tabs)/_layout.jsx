import React from "react";
import { Tabs } from "expo-router";
import * as Linking from "expo-linking";

export default function _layout() {
  /*Uso expo router que viene con deeplinking de forma predeterminada, 
  esto quiere decir que puedo ingresar atraves de un enlace externo 
  a una parte deseada de mi app, 
  por ejemplo ingresar directamente a users*/
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "index", headerShown: false }}
      />
      <Tabs.Screen
        name="users"
        options={{ title: "Users", headerShown: false }}
      />
    </Tabs>
  );
}
