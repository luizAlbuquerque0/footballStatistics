import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppStack } from "./appStack";
import {AuthStack} from "./AuthStack";

export function Router(){

    const auth = false;

    return(
        <NavigationContainer>
           {auth ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}