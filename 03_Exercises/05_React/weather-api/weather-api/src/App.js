import './App.css';

import React, {  useState } from "react";
import {getWeatherData} from './components/data'
import Footer from './components/Footer';
import Headerimage from './components/Headerimage';
function App() {
 

/*const url=await fetch('https://api.openweathermap.org/data/2.5/forecast?q=london&cnt=8&units=metric&appid=5a0e7c2b28b4f31e8ed3869e686d6390');
const urlresponse=await url.json();
*/
const [weatherdata, setWeatherData] = useState(null);
const [city, setCity] = useState('london');
const [loading, setLoading] = useState(false);
const[headerid,setheaderid]=useState();

const getData = async () => {
  try{
      setLoading(true);
      const data = await getWeatherData(city);
     /* console.log(data)*/
      setWeatherData(data);
      setLoading(false);
      getidd();
  }catch(error) {
    console.log(error.message);
    setLoading(false);
  }
  
}

  
  

const getidd =()=>{
  setheaderid( weatherdata.list[0].weather[0].id)
}


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

  <div className='mostlycloud'>
  <Headerimage idimage={headerid} alt='clouds'/>
 </div>
 
  <p className="text1">{weatherdata ? weatherdata.list[0].weather[0].description: console.log("no data")}</p>
  
  <p className="text2"><strong>Temperature</strong>&nbsp; {weatherdata? parseFloat(weatherdata.list[0].main.temp_min -273.15).toFixed(1): console.log("no data")} &deg;C &nbsp; to &nbsp; {weatherdata? parseFloat(weatherdata.list[0].main.temp_max -273.15).toFixed(1): console.log("no data")} &deg;C </p>
    
  <p className="text3"><strong>Humidity </strong>&nbsp; {weatherdata? weatherdata.list[0].main.humidity: console.log("no data")} &nbsp;  % <strong> Pressure </strong>{weatherdata? weatherdata.list[0].main.pressure: console.log("no data")} &nbsp;</p>
  </div>

{
  <div className='footerdesign'>
  
  {
    weatherdata && weatherdata.list.slice(3,9).map(
      
      el=> 
      <Footer idtemptime={el.weather[0].id}time={el.dt_txt.split(" ")[1].split(":")[0]} temp={(el.main.temp -273.15).toFixed(1)}  />
      
    )
  }
 
 
  
  </div>
}
    </div>
   
  )
  
  }

export default App;