import React from "react";
import SearchBar from "./SearchBar";

import styles from "./css/Nav.module.css"
import { Link } from "react-router-dom"





const Nav = ({ onSearch , logout }) => {


    return( 


        
        <nav className={styles.nav}>
            <Link to="/home">
            <button>HOME</button>
            </Link>
            
            <Link to="/about">
            <button >About</button>
            </Link>

            <Link to="/favorites">
            <button >Favorites</button>
            </Link>

            
            <button onClick={logout} >Logout</button>
            


            <SearchBar onSearch={onSearch}></SearchBar>

        </nav>

    )
}
export default Nav;