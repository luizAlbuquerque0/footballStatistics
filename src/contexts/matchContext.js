import { Children, createContext, useContext, useState } from "react";
import { matchService } from "../services/MatchService";
import { useAuth } from "./AuthContext";

export const MatchContext = createContext({});


export const MatchProvider = ({children})=>{

    const [matchs, setMatchs] = useState([]);
    const {authData} = useAuth();

    async function getAllUserMatchs(){
        var userMatchs = await matchService.getAllUserMatchs(authData.id);
        setMatchs(userMatchs);
        return userMatchs;
    }

    return(
        <MatchContext.Provider value={{getAllUserMatchs, matchs: matchs}}>
            {children}
        </MatchContext.Provider>
    )
}

