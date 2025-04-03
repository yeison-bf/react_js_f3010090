import axios from "axios"

export const GetUsers = async () =>{
    try{
        const response = await axios.get('https://rickandmortyapi.com/api/character/')
        return response
    }catch(error){
        return {
            success:false,
            message: "Lo sentimos, se ha producido un error"
        }
    }
}