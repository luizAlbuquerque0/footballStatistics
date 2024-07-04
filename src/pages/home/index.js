import React, { useContext, useEffect, useState } from "react";
import { View, Text,StyleSheet } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import MatchsSimplefied from "../../components/MatchSimplified/MatchSimplified";
import { MatchContext } from "../../contexts/matchContext";

export default function Home(){

    const {authData} = useAuth();

    const {getAllUserMatchs, matchs} = useContext(MatchContext)

    useEffect((e)=>{
         getAllUserMatchs();
    },[])

    

    

    if(matchs.length == 0){
        return(
            <View>
                <Text>Loading</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>FootBall Statistics</Text>
            <Text style={styles.subTitle}>Nunca perca seus números de vista</Text>
            {matchs.map((e)=>(
                <MatchsSimplefied minutesPlayed={10} shoots={5} goals={1} key={e.id}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#030303",
        width:"100%",
        height: "100%",
        alignItems: "center",
    },
    title:{
        color: "white",
        fontSize: 30,
        marginTop: "10%",
        textAlign: "center",
    },
    subTitle:{
        textAlign: "center",
        color: "white",
        fontSize: 15,
        width: "70%",
        fontFamily: "ArchitectsDaughter_400Regular",
    },
    
})