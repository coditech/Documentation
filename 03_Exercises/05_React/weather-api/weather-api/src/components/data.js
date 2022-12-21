import axios from 'axios';

const baseUrl='https://api.openweathermap.org/data/2.5/forecast?';
const apiKey = '4ebac10eae95c0bdcaf00573dd58dee6';
export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    }catch(error) {
        throw error;
    }
}