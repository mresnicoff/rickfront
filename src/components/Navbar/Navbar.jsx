import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Navbar.module.css";

import { Link } from "react-router-dom";

export default function Navbar(props){
    return(
        <div className={style.container}>
            <Link className={style.link} to='/about'>About</Link>
            <Link className={style.link} to='/favorites'>Favorites</Link>
            <Link className={style.link} to='/home'>Home</Link>
            <Link className={style.link} to='/'>Log Out</Link>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}