import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css"
export default function About () {
    return(
        <div className={styles.me}>
                <div className={styles.ab}>
                    <p>My name is Martín Resnicoff.  I'm a Full Stack Developer & Industrial Engineer.<br></br><br></br>
                    This application was made using CSS, HTML, JS and React. The interesting thing about it is that I am using a JSON file as a database.<br></br><br></br>
                    It consumes the Rick & Morty API and shows us basic information of each character. </p>
                <Link to={`/home`}><h3 className={styles.like}>I hope you enjoy it!</h3>
                </Link>
                </div><br></br>
        </div>
    )
}