import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from "react-router-dom"
import styles from "./Detail.module.css";
const Detail = () => {
  const navigate = useNavigate();
    const  id=useParams()
    console.log(id.detailId)
    const [character, setCharacter]=useState({})
    const backToHome =()=>{
      navigate("/home")
    } 
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id.detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, []);
  return (
    <div>
       
            {character &&  <div><ul>
              <li>      <button onClick={backToHome} className={styles.buttonBack}>
        Volver
      </button></li>
            <li> Name: {character.name}</li>  
            <li>Status: {character.status}</li> 
            <li>Spice: {character.species}</li>  
            <li>Gender: {character.gender}</li> 
            <li>Origin: {character.origin?.name}</li> 
            </ul>
        </div>}
        {character &&<div><img src={character.image} alt={id.detailId}/></div>}
    </div>
  )
}

export default Detail