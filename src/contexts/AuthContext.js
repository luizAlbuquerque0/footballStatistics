import { createContext, useContext, useState } from "react";
import { authService } from "../services/AuthService";

export const AuthContext = createContext({});



export const AuthProvider = ({children})=>{

    const [loading, setLoading] = useState(false);
    const [authData, setAuth] = useState(false);
    

    async function signIn(email,password){
        const auth = await authService.signInUser(email,password, setLoading);
        setAuth(auth);
        return auth;
    }

    async function register(name, email, password){
        const auth = await authService.registerUser(name,email,password);
        setAuth(auth);
        return auth;
    }


    return (
        <AuthContext.Provider value={{signIn, authData: authData, register}}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}