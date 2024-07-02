import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {Login} from "../pages/login/index"

export function AuthStack(){

    const Stack = createNativeStackNavigator();

    return(
       <Stack.Navigator>
            <Stack.Screen 
            options={{
                title: "",
                headerTransparent: true,
                headerShown: false
            }}
            name="login" component={Login} />
       </Stack.Navigator>
    )
}