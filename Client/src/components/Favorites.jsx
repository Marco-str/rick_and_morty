import React from "react";
import Card from "./Card";
import styles from "./css/Card.module.css"

import {  useDispatch, useSelector } from "react-redux";

import { orderCards, filterCards, removeFav, reset } from "../redux/actions/actions";


 export default function Favorites ({ onClose }){

    const dispatch = useDispatch()

    const {myFavorite} = useSelector((state)=> state)
    
    
    const closeFavorite=(id)=>{
        onClose(id)
        dispatch(removeFav(id));
    }


    
    function handleOrder(event){

        event.prevenDefault()

        const { value} = event.target

        dispatch(orderCards(value))
    }

    
    function handleFilter(event){

        event.prevenDefault()

        const { value} = event.target

        dispatch(filterCards(value))
    }
                    
    function resetButton (){
        dispatch(reset())
    }


    return(
        <div>

            <select name= "order" defaultValue={"DEFAULT"} onChange={handleOrder}>
             <option value="DEFAULT" disable>
                Select Order
             </option>

            <option value="Ascendente" >Ascendente</option>
            <option value="Descendente" >Descendente</option>

            </select>

            <select name= "filter" defaultValue={"DEFAULT"} onChange={handleFilter}>
             <option value="DEFAULT" disable>
                Select Filter
             </option>

            <option value="Male" >Male</option>
            <option value="Female" >Female</option>
            <option value="Gender" >Gender</option>
            <option value="unknow" >unknow</option> 

            </select>

            <button onClick={resetButton}>Reset</button>


            <h1>Mis Favoritos</h1>
            {myFavorite &&
                myFavorite.map(({id, name, status, gender, species, origin,  image}, index)=>{
                    // const {id, name, status, gender, species, origin,  image}= element 


                    return ( 
                   <div  className={styles.card}>
                        
                    <Card
                    key= {index}
                    id={id}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                    origin={origin?.name}
                    image={image}
                 
                    onClose={()=>closeFavorite(id)}
                 />
                    </div>)
                  })
             }

            
        </div>
    )

}



// const mapStateToProps = (state) =>{
//     return{
//         myFavorite: state.myFavorite
//     }
// }


// const mapDispatchToProps = (dispathc) =>{
//     return{
//         removeFav: (id)=> dispathc(removeFav(id))
//     }
// }

// export default connect (mapStateToProps, mapDispatchToProps)(Favorites)