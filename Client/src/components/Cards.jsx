import Card from './Card';
import styles from "./css/Cards.module.css"



export default function Cards({ characters, onClose}) {
   
   return (
   <div className={styles.div}>
      {
          characters.map(({id, name, status, gender, species, origin,  image} )=>{
            return ( 
            
            <div  class="card"><Card
            
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
         
            onClose={onClose}
         />
            </div>)
          })
      }

   </div>)
}
