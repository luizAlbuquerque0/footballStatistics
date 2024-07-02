import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../pages/home";

export function AppStack(){

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen 
            options={{
                title: "",
                headerTransparent: true,
                headerShown: false
            }}
            name="home" component={Home}/>
        </Stack.Navigator>
    )
}