import React from "react";
import styles from "./css/SearchBar.module.css" 
import { useState } from "react";



export default function SearchBar({onSearch}) {

   // const [character, setCharacters]= useState("")

   const [id, setId]= useState("")

   const handleChange= (evento)=>{
      setId(evento.target.value)

   }
 
   return (
  
      <div className={styles.search}>
  
         <input type='search' name="search" value={id} onChange={handleChange} />
  
         <button onClick={()=> onSearch(id)}>Agregar</button>
  
      </div>
  
  );
}

