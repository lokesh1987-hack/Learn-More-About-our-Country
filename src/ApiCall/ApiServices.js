import axios from "axios";


export const getAll = async() =>{
   const data = await axios.get('https://restcountries.com/v3.1/all').then(response=>response.data)
   return data;
}


