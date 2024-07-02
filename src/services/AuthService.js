import api from "./api"


async function signInUser(email, password,  setLoading){
    
    setLoading(true);
    try{
        var res = await api.get(`/users?email=${email}&password=${password}`);
        if(res.data.length > 0){
            return res.data;
        }
        throw new Error("Unauthorized")
    }catch(err){
        if (err.response) {
            console.error("Erro ao fazer a solicitação:", err.response);
            console.error("Detalhes do erro:", err.response.data);
          } else if (err.request) {
            console.error("Erro ao fazer a solicitação:", err.request);
          } else {
            console.error("Erro:", err.message);
          }
    }finally{
      setLoading(false);
    }
}

export const authService = {signInUser}