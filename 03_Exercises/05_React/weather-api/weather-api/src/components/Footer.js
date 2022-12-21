import React, { useEffect, useState } from 'react' 
import App from "../App.js"
import '../App.css';

import partlycloudy from '../weather-icons/partlycloudy.svg';

import fog from '../weather-icons/fog.svg';
import drizzle from '../weather-icons/drizzle.svg';
import snow from '../weather-icons/snow.svg';
import rain from '../weather-icons/rain.svg';
import clear from '../weather-icons/clear.svg';
import storm from '../weather-icons/storm.svg';
import mostlycloudy from '../weather-icons/mostlycloudy.svg';

export default function Footer(props) {


    const image = () =>{
         if (props.idtemptime<300) {
            return (
              <div>     <img src={storm} alt='storms' className='image1'/></div>
            )
          }


          else if (props.idtemptime>300 && props.idtemptime<499) {
            return (
              <div>     <img src={drizzle} alt='drizzle' className='image1'/></div>
            )
          }

          else if (props.idtemptime>499 && props.idtemptime<599) {
            return (
              <div>     <img src={rain} alt='rains' className='image1'/> </div>
            )
          }
          else if (props.idtemptime>599 && props.idtemptime<699) {
            return (
              <div>     <img src={snow} alt='snows' className='image1'/> </div>
            )
          }
          else if (props.idtemptime>699 && props.idtemptime<799) {
            return (
              <div>       <img src={fog} alt='fogs' className='image1'/> </div>
            )
          }

          else if (props.idtemptime==800) {
            return (
              <div>      <img src={clear} alt='clear' className='image1'/> </div>
            )
          }
          else if (props.idtemptime== 801) {
            return (
              <div>      <img src={partlycloudy} alt='partly-clouded' className='image1'/> </div>
            )
          }




          else{
              return (<div><img src={mostlycloudy} alt='mostly-clouded' className='image1'/> </div>)
          }
    }
    

    return (
        <div>
        
             <div >
              <div>{props.time}:00</div>
              <div>

      {image()
        }
           </div>

              <div>{props.temp}&deg;C</div>
            </div>
            
        </div>
    )
}