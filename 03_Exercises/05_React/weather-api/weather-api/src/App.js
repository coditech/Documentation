import './App.css';
import clear from './weather-icons/clear.svg';
import cloudy from './weather-icons/cloudy.svg';
import partlycloudy from './weather-icons/partlycloudy.svg';
import mostlycloudy from './weather-icons/mostlycloudy.svg';
import React, {  useState , useEffect} from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Cloudy from './weather-icons/mostlycloudy.svg';
import Weatherhourly from './components/Weatherhourly';
import Clear from './weather-icons/clear.svg';
import axios from 'axios';
import {getWeatherData} from './components/data'
function App() {
 

/*const url=await fetch('https://api.openweathermap.org/data/2.5/forecast?q=london&cnt=8&units=metric&appid=5a0e7c2b28b4f31e8ed3869e686d6390');
const urlresponse=await url.json();
*/
const [weatherdata, setWeatherData] = useState(null);
const [city, setCity] = useState('London');
const [loading, setLoading] = useState(false);

const getData = async () => {
  try{
      setLoading(true);
      const data = await getWeatherData(city);
     /* console.log(data)*/
      setWeatherData(data);
      setLoading(false);
  }catch(error) {
    console.log(error.message);
    setLoading(false);
  }
}
useEffect(() => {
  getData();
}, []);


  return (
    <div className="App">
    
    <div className='formm'>
    
    <input
      type="text" value={city} onChange={(e) => setCity(e.target.value)} className="textt1" placeholder="Type in a city name"
      
      
    />
    <button className="btn1"
    onClick={() => getData()}
    >
      Find Weather
    </button>
  </div>
  
  <div className="weather-nos">

  <img src={cloudy} className='mostlycloudly' alt='mostlycloudly'/>
  {console.log(weatherdata)}
  <p className="text1">overcast clouds</p>
  
  <p className="text2"><strong>Temperature</strong> </p>
  <p className="text3"><strong>Humidity </strong> 78% <strong> Pressure </strong>1008.48</p>
  </div>
    
    <div className="last">
    <div className="time">
      <div>
      <div>06:00</div>
        <div>
        <img src={Cloudy} alt='mostly-cloudy' className='image1'/>
        </div>
        <div>9&deg;C</div>
      
      </div>
     

      <div>
        <div>06:00</div>
        <div>
        <img src={Cloudy} alt='mostly-cloudy' className='image1'/>
        </div>

        <div>9&deg;C</div>
      </div>

      <div>
        <div>09:00</div>
        <div>
        <img src={Clear} alt='clear' className='image1'/>
        </div>

        <div>14 &deg; C</div>
      </div>

      <div>
        <div>12:00</div>
        <div>
        <img src={Clear} alt='clear' className='image1'/>
        </div>

        <div>17 &deg; C</div>
      </div>

      <div>
        <div>15:00</div>
        <div>
        <img src={Clear} alt='clear' className='image1'/>
        </div>

        <div>18 &deg; C</div>
      </div>
      <div>
        <div>18:00</div>

        <div>
        <img src={Clear} alt='clear' className='image1'/>
        </div>

        <div>16 &deg; C</div>
      </div>
      <div>
        <div>21:00</div>
        <div>
        <img src={Cloudy} alt='mostly-cloudy' className='image1'/>
        </div>

        <div>13 &deg; C</div>
      </div>

      </div>
      </div>
  
  
    </div>
   
  );
  }

export default App;