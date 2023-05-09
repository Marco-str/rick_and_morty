
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav"
import About from "./components/About"

import Detail from "./components/Detail";


import Login from "./components/Login"
import React, { useEffect, useState } from 'react';
import axios from "axios"
import {Routes, Route } from "react-router-dom"
import { useLocation, useNavigate } from 'react-router-dom';


import styles from "./components/css/App.module.css"
import "./App.css"

import Favorites from './components/Favorites.jsx';


//import SearchBar from './components/SearchBar.jsx';
//import characters from './data.js';


function App() {
   
   


   const navigate = useNavigate();
const [access, setAccess] = useState(false);
const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = '@Model101';





const [characters, setCharacters] = useState([  ])

const location = useLocation()



function login(inputs) {
   if (inputs.contraseña === PASSWORD && inputs.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

function logout(inputs) {
    
      setAccess(false);
      navigate('/');
   }


useEffect(()=>{
   !access && navigate("/");
},[access]);



   function onSearch(id) { 
      // axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         
         axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => { 
         if (data.name) {
               let exist = characters.find((cha)=>cha.id ===data.id);
               if(exist){
               alert("CARTA YA EXISTENTE")
               }else{
                  
                  setCharacters((oldChars) => [...oldChars, data]);
               }
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }

   function onClose(id)  {

         setCharacters((oldChars) => { 
            return oldChars.filter((character)=> character.id !== id)
        });


      }

   return (
      
      <div className={styles.diver}>
        
        {
         location.pathname === "/" ? null :  <Nav logout={logout} onSearch={onSearch} ></Nav> 
        }
        
      
         <div className={styles.div}>

            <Routes>
               <Route path="/" element={<Login login={login}/>}></Route>
               <Route path="/home" element={<Cards onClose={onClose} characters={characters}  />}></Route>
               <Route path="/about" element={<About />}></Route>
               <Route path="/favorites" element={<Favorites onClose={onClose} />}></Route>
               <Route path="/detail/:id" element={<Detail />}></Route>
            </Routes>

         
         
         </div>
      
      </div>
   );
}

export default App;
