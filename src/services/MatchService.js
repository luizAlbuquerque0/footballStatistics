import { useAuth } from "../contexts/AuthContext";
import api from "./api";


async function getAllUserMatchs(userId){

    try{
        var res = await api.get(`/matchs?playerId=${userId}`)
        return res.data;
    }catch(err){

    }
}

export const matchService = {getAllUserMatchs};