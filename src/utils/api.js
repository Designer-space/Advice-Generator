import axios from 'axios'; 

const BASE_URL = 'https://api.adviceslip.com/advice';

export const fetchDataFromApi = async () =>{
    try {
        const { data } = await axios.get(BASE_URL)
        return data
    } catch (err) {
        console.log(err);
        return err
    }
}