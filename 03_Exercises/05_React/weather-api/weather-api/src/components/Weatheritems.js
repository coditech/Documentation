import React from 'react'

  function Weatheritems(props) {
    const time = new Date(props.time).getHours();

    return (
        <div className="weather-items">
        <div>{time}:00</div>
        <img src={props.image} alt="weather-images" />
        <div>{Math.floor(props.temp- 273.15)}°C</div>
      </div>
    )

}
export default Weatheritems;