import { useState } from "react";
import { View , Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import { useFonts, ArchitectsDaughter_400Regular } from '@expo-google-fonts/architects-daughter'


export function Login() {
    const [fontLoaded] = useFonts({
        ArchitectsDaughter_400Regular
    })

    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = ()=>{
        console.log("Register")
    }
    
    const login = ()=>{
        console.log("email:" + email)
        console.log("senha:" + password)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>FootBall Statistics</Text>
            <TextInput 
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="white"
                onChangeText={(e)=>setEmail(e)}
            />
            <TextInput 
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="white"
                onChangeText={(e)=>setPassword(e)}
            />
            <TouchableOpacity style={styles.button}>
                <Text onPress={login}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
                <Text style={styles.lineText}>ou</Text>
                <View style={styles.line}></View>
            </View>

            <Text style={styles.registerText} >
                Não tem uma conta?  
                <Text style={styles.registerLink} onPress={register}>  Cadastre-se</Text> 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#030303",
        width:"100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    input:{
        padding: 10,
        backgroundColor: "#373636",
        borderWidth: 2,
        borderColor: 'black',
        width: "90%",
        marginBottom: 8,
        borderRadius: 8
    },
    title:{
        color: "white",
        marginBottom: 8,
        fontSize: 30,
        marginBottom: "10%",
        fontFamily: "ArchitectsDaughter_400Regular",
    },
    button:{
        backgroundColor: "#015267",
        width: "90%",
        padding: 8,
        alignItems: "center",
        marginTop: "5%",
        borderRadius: 8
    },
    lineContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginTop: "8%",
        marginRight: "5%",
        marginLeft: "5%"
    },
    line: {
        flex: 1,
        height: .5,
        backgroundColor: '#BABABA',
      },
      lineText: {
        marginHorizontal: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
      },
      registerText:{
        color:"grey"
      },
      registerLink:{
        color:"#015267",
      }
})