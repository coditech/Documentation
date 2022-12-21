import React from "react";
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



export default function Headerimage(props) {
    const image = () =>{
        if (props.headerid<300) {
           return (
             <div>     <img src={storm} alt='storms' className='image1'/></div>
           )
         }


         else if (props.headerid>300 && props.headerid<499) {
           return (
             <div>     <img src={drizzle} alt='drizzle' className='image1'/></div>
           )
         }

         else if (props.headerid>499 && props.headerid<599) {
           return (
             <div>     <img src={rain} alt='rains' className='image1'/> </div>
           )
         }
         else if (props.headerid>599 && props.headerid<699) {
           return (
             <div>     <img src={snow} alt='snows' className='image1'/> </div>
           )
         }
         else if (props.headerid>699 && props.headerid<799) {
           return (
             <div>       <img src={fog} alt='fogs' className='image1'/> </div>
           )
         }

         else if (props.headerid==800) {
           return (
             <div>      <img src={clear} alt='clear' className='image1'/> </div>
           )
         }
         else if (props.headerid== 801) {
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
   {image()
   }
   
   
   </div>
    )


}
