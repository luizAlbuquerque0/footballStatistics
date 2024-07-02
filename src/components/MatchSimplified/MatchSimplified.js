import React from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/Feather'
import { View,Text, StyleSheet } from "react-native";


export default function MatchsSimplefied({minutesPlayed, shoots, goals}){

    return(
        <View style={styles.lastMatchContainer}>
            <View style={styles.lastMatchStats}>
                <Icon3 name="clock" size={40} color="#900" style={styles.icon}/>
                <Text style={styles.numbers}>{minutesPlayed}</Text>
                <Text>minutos</Text>
                </View>
                <View style={styles.lastMatchStats}>
                <Icon2 name="shoe-cleat" size={40} color="#900" style={styles.icon}/>
                <Text style={styles.numbers}>{shoots}</Text>
                <Text>Chutes</Text>
                </View>
                <View style={styles.lastMatchStats}>
                <Icon name="football" size={40} color="#900" style={styles.icon}/>
                <Text style={styles.numbers}>{goals}</Text>
                <Text>Gols</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    lastMatchContainer:{
        backgroundColor: "#FFB200",
        height: "20%",
        width: "90%",
        borderRadius: 8,
        marginTop: "10%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    lastMatchStats:{
        width: "30%",
        height: "100%",
        alignItems: "center"
    },
    icon:{
        marginTop: "10%",
    },
      numbers:{
        marginTop: "8%"
      }
})