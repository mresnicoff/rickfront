import React from 'react'
import { Link } from "react-router-dom";
import Card from '../Card/Card.jsx';
// import styles from "./Cards.module.css";
import styled from 'styled-components' 
import { connect, useDispatch } from 'react-redux';
import {orderCards, filterCards} from "../../redux/actions.js"
import './favorites.css';

const StyledCard = styled(Card)`
&:hover {
   transform: scale(1.05);
   transition: transform 0.5s;
   transition-delay: 0.5s;
}
`;

export const Favorites = ({myFavorites, getFavorite}) => {
  const dispatch = useDispatch()
  React.useEffect(() => {

 }, []);
  function ordenar(e){dispatch(orderCards(e.target.value))}
  function filtrar(e){dispatch(filterCards(e.target.value))}
  return (
    <div>
   <div class="container">
    <label className="input texto">Ordenar:</label>
    <select className="input" onChange={ordenar} name="orden" id="orden">
    <option value="Ascendente">Ascendente</option>
    <option value="Descendente">Descendente</option>
    </select>
    <label class="input texto">Filtrar:</label>
    <select className="input"onChange={filtrar}name="filtro" id="filtro">
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Genderless">Genderless</option>
    <option value="unknown">unknown</option>
    </select></div>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          {myFavorites.map(character => (
            <StyledCard
              key={character.name}
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
              id={character.id}
              onClose={character.onClose}
            />
          ))}
        </div>
        </div>
  )
}



export function mapStateToProps(state) {
    return {myFavorites: state.myFavorites}
 }





 export default connect(mapStateToProps, null)(Favorites);