import React, {useState} from "react";
export default function SearchBar(props) {
   const [input,SetInput]=useState(null)
   const onChange=(e)=>{SetInput(e.target.value)}
   return (
      <div>
         <input type='search' placeholder="Id personaje" onChange={(e)=>onChange(e)}/>
      <button onClick={() => props.onSearch({input})}>Agregar</button> 
      </div>
   );
}
