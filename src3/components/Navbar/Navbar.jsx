import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Navbar.module.css"
import { NavLink } from "react-router-dom";
export default function Navbar(props){
    return(
        <div className={style.container}>
        <NavLink to="/"><span>Home</span></NavLink>
        <NavLink to="/about"><span>about</span></NavLink>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}