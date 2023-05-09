// import card from "./css/Card.module.css"
import styles from "./css/Card.module.css"
import { Link } from "react-router-dom"

import {connect, useDispatch, useSelector} from "react-redux"

import { addFav, removeFav } from "../redux/actions/actions";
import { useEffect, useState } from "react";



 export default function Card(props) {
 const   {id, name, status, species, gender, origin, image, onClose} = props;
   
    const dispatch= useDispatch()
   // dispatch(addFav({})) esto es un hook apra trabajar mas comodo 

   const [isFav, setIsFav] = useState(false)

   const {myFavorite} = useSelector((s)=> s);

   const handleFavorite = ()=> {

      if (isFav){
      
         setIsFav(false)
         dispatch(removeFav(id))
      
      }else{
      
         setIsFav(true)
         dispatch(addFav(props))
      }

   }


   useEffect(() => {
      
      myFavorite.forEach((fav) => {
        
         if (fav.id === props.id) {
         
            setIsFav(true);
       
         }
      });
   }, [myFavorite]);



function superClouse(){

   onClose(id)
   dispatch(removeFav(id));

}



   return (
      
      <div className={styles.div}>

         {
            isFav ? (
            <button onClick={handleFavorite}>❤️</button>
                  ) : (
            <button onClick={handleFavorite}>🤍</button>
                   )
         }
         
          <button onClick={superClouse}>X</button>
         
      <Link className={styles.link} to={`/detail/${id}`} >
     
      <h3 className="card-name">{name}</h3>
         
         <h1>{name}</h1>
         {/* <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2> */}
       
         <h2>{origin?.name}</h2>
        
         <img src={image} alt={name} /> 
    
      </Link>
    
      </div>
   );
}


// function mapStateToProp(state){

//    return{
//       myFavorite: state.myFavorite
//    }
// }

// function mapDispatchtoProp(dispatch){

//    return{
//       addFav: (ch)=> dispatch(addFav(ch)),
//       removeFav: (id)=> dispatch(removeFav(id))

//    }
// }


// export default connect(mapStateToProp, mapDispatchtoProp) (Card)

// name: nombre.
// status: status.
// species: especie.
// gender: género.
// origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
// image: imagen.