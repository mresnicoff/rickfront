import React from 'react'
import { Link } from "react-router-dom";
import Card from '../Card/Card.jsx';
// import styles from "./Cards.module.css";
import styled from 'styled-components' 
import { connect, useDispatch } from 'react-redux';
import {orderCards, filterCards} from "../../redux/actions.js"
import {getFavorite} from "../../redux/actions.js"

const StyledCard = styled(Card)`
&:hover {
   transform: scale(1.05);
   transition: transform 0.5s;
   transition-delay: 0.5s;
}
`;

export const Favorites = ({myFavorites, getFavorite}) => {
  const dispatch = useDispatch()
  React.useEffect(() => {getFavorite()

 }, []);
  function ordenar(e){dispatch(orderCards(e.target.value))}
  function filtrar(e){dispatch(filterCards(e.target.value))}
  return (
    <div>
    <p><Link to={`/home`}>home</Link></p>
   <div>
    <label >Ordenar:</label>
    <select onChange={ordenar} name="orden" id="orden">
    <option value="Ascendente">Ascendente</option>
    <option value="Descendente">Descendente</option>
    </select>
    <label >Filtrar:</label>
    <select onChange={filtrar}name="filtro" id="filtro">
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

 export function mapDispatchToProps(dispatch) {
  return {
     getFavorite: function(character) {
       dispatch(getFavorite());
     },

  }

}


 export default connect(mapStateToProps, mapDispatchToProps)(Favorites);