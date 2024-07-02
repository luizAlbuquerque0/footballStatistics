import { useState } from "react";
import { View , Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import { useFonts, ArchitectsDaughter_400Regular } from '@expo-google-fonts/architects-daughter'
import { useAuth } from "../../contexts/AuthContext";
import { signInUser } from "../../services/AuthService";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function Register(){
    const authContext = useAuth();
    const navigation = useNavigation();

    const [fontLoaded] = useFonts({
        ArchitectsDaughter_400Regular
    })

    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async()=>{
        await authContext.register(name,email,password)
    }
    
    async function login(){
        navigation.navigate("login")
    }

    return(
        <View style={styles.container}>
            
            <Text style={styles.title}>FootBall Statistics</Text>
            <Text style={styles.subTitle}>Crie sua conta e não perca de vista seus números</Text>
            <TextInput 
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="white"
                onChangeText={(e)=>setName(e)}
            />
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
                <Text onPress={register}>Criar conta</Text>
            </TouchableOpacity>

            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
                <Text style={styles.lineText}>ou</Text>
                <View style={styles.line}></View>
            </View>

            <Text style={styles.registerText} >
                Já tem uma conta?  
                <Text style={styles.registerLink} onPress={login}>  Entrar</Text> 
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
        fontSize: 30,
        marginBottom: "2%",
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
      },
      subTitle:{
        color: "white",
        fontSize: 15,
        marginBottom: "10%",
        width: "50%",
        textAlign: "center",
        fontFamily: "ArchitectsDaughter_400Regular",
      }
})