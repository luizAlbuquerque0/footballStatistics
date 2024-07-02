import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({});



export const AuthProvider = ({children})=>{

    const [user, setUser] = useState({});

    function signIn(){
        console.log("Logado")
    }


    return (
        <AuthContext.Provider value={{signIn, user: user}}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}