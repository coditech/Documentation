import axios from 'axios';

const baseUrl='https://api.openweathermap.org/data/2.5/forecast?';
const apiKey = '5a0e7c2b28b4f31e8ed3869e686d6390';
export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    }catch(error) {
        throw error;
    }
}