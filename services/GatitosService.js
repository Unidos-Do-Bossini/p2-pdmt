import axios from 'axios';

const API_URL = "https://api.thecatapi.com/v1/images/search?limit=5"

export const getGato = async () => {
    try{
        const resposta = await axios.get(API_URL);
        return resposta.data;
    }catch(error){
        console.error(error);
        throw error;
    }
}
