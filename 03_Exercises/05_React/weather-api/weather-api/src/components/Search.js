import React, { useState } from "react";
import "./Search.css";

const Search=({onSearchChange})=>{
  const[search,setSearch]=useState(null);
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

return(
 <div className='formm'>
 <input
 type="text" className="textt1" placeholder="Type in a city name"
 value={search}
 onChange={handleOnChange}
/>
 </div>

)
}

  
 
export default Search;