import styled from "styled-components";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import {deleteFavorite, addFavorite} from "../../redux/actions.js"
import { connect } from 'react-redux';
import React, {useState, useEffect} from "react"

const Img = styled.img`
   border-radius: 50%;
   box-shadow: 2px -6px 10px #fff;
`;

const Title = styled.h1`
   color: beige;
   font-weight: bold;
   display: flex;
   justify-content: center;
`;

const Text = styled.h2`
   color: #efe;
   font-size: 1.2rem;
   font-weight: 400;
   display: flex;
   justify-content: center;
`;
const Button1 = styled.button` 
background-color: rgb(200 0 0);
font-weight:bold;
color: white;
border 1px solid white;
border-radius: 5px
`; // aqui estuvo Jorge Diaz jeje
export function Card(props) {
   const [isFav,setIsFav]=useState(false)
   function handleFavorite(){
      if(isFav){setIsFav(false) 
var char1={id: props.id, user:props.user}
         props.deleteFavorite(char1)}
         else {setIsFav(true)
    const character={id: props.id, name:props.name, image:props.image, species: props.species, gender:props.gender, user:props.user}
         props.addFavorite(character)}
   }
   useEffect(() => {
      console.log(props.myfavorite)
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });}, [props.myFavorites]);
   return (
      <div className={styles.container}>
        <div> {
   isFav ? (<button onClick={handleFavorite}>❤️</button>) : 
   (<button onClick={handleFavorite}>🤍</button>)
}</div>
         <div className={styles.buttonContainer}>
            <Button1 onClick={() => props.onClose(props.id)}>X</Button1>
         </div>
         <Link to={`/detail/${props.id}`} style={{textDecoration: 'none'}}><Title>{props.name}</Title></Link>
         <Img  src={props.image} alt="img not found" />
         <div className={styles.textContainer}>
            <Text>{props.species}</Text>
            <Text>{props.gender}</Text>
         </div>
      </div>
   );
}
export function mapDispatchToProps(dispatch) {
   return {
      addFavorite: function(character) {
        dispatch(addFavorite(character));
      },
      deleteFavorite: function(id) {
         dispatch(deleteFavorite(id));
       } 
   }

}
export function mapStateToProps(state) {
   return {myFavorites: state.myFavorites,
            user:state.user}
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
