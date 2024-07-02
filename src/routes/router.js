import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppStack } from "./appStack";
import {AuthStack} from "./AuthStack";
import { useAuth } from "../contexts/AuthContext";

export function Router(){

    const {authData} = useAuth();


    return(
        <NavigationContainer>
           {authData ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}