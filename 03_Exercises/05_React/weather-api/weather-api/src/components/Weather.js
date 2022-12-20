import React from "react";
import cloudy from '../weather-icons/mostlycloudy.svg';
import "./Search.css";
function Weather(props){
  return(
    <div className="weather-nos">
    <img src={props.image} className='imagess' alt='weather-image'/>
    <p className="text1">{props.description}</p>
    {/*Change to C rule*/}
    <p className="text2"><strong>Temperature</strong> {Math.floor(props.minTemp- 273.15)}°C to {Math.floor(props.maxTemp- 273.15)}°C</p>
    <p className="text3"><strong>Humidity </strong> {props.humidity} % <bold> Pressure </bold>{props.pressure}</p>
    </div>
  );
}
export default Weather;