import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

export function AppStack(){

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen/>
        </Stack.Navigator>
    )
}