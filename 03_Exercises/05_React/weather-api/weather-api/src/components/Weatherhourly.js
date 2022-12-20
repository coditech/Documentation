import React from "react";
import Weatheritems from './Weatheritems';

 function Weatherhourly(props){
return(
<div className="weatherhourly-list">
{props.list.map((item,index)=>{
    if(index>0 && index<8){
        return <Weatheritems time={item.dt_txt} temp={item.main.temp} key={index} image={props.getImage(item.weather[0].id)}/>
    }
})}
</div>
);
}

export default Weatherhourly;