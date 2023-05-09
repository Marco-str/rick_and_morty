import React, { useState } from "react"
import { Link } from "react-router-dom"


import styles from "./css/Login.module.css"


const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ;/* /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ */
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,8}$/i
// const regexPassword = 

export default function Login ({ login }){

const [inputs, setInputs] = useState({
    email: "",
    contraseña: ""
})


const [errors, setErrors] = useState({
    email: "",
    contraseña: ""
})

const validate = (inputs) => {

    const errors = {}

    if(!inputs.email){
        errors.email= "Debe haber un email"
    }else if (!inputs.contraseña){
        errors.contraseña = "Debe haber una contraseña"
    }else if (!regexEmail.test(inputs.email)){
        errors.email="Debe tener los caracteres correctos"
    }else if (!regexPassword.test(inputs.contraseña)){
        errors.contraseña= "coloca bien la clave pelao"
    }
    return errors;

}
const handleChange = (event) => {

    setInputs({
        ...inputs,
        [event.target.name] : event.target.value
    })
    
    setErrors(
        validate ({
        ...inputs,
        [event.target.name] : event.target.value
    }))


}


const handleSubmit =(event) => {

    event.preventDefault()

    const aux = Object.keys(errors)
    if(aux.length===0){


        setInputs({
            ...inputs,
            [event.target.name] : event.target.value
        })
        
        setErrors(
            validate ({
            ...inputs,
            [event.target.name] : event.target.value
        }))

        login(inputs)

        return alert ("TAMO FINO")
    
    
    }
    return alert ("ALTO AHI MI LOCO")

}

    return(

        <div className={styles.loginbox}>
            <form action="" onSubmit={handleSubmit}>

                <h2 className={styles.loginboxh2}>LOGIN</h2>

            <label>Email: </label>
        <input type="text" name="email" value={inputs.email} onChange={handleChange} placeholder="email@exampler.com" />
            <p className="danger">{errors.email}</p>


        <label>Contraseña: </label>
        <input  name="contraseña" value={inputs.contraseña} onChange={handleChange} />
        <p className="danger">{errors.contraseña}</p>
        
                        {
                        Object.keys(errors).length ===0 ? (<Link to= "/home" ><button type="submit">INGRESAR</button></Link>) : null
                        }
            </form>
            
        </div>
    )
}