import Card from './Card';
import styled from "styled-components";

const StyledCards=styled.div` display: flex; justify-content: space-around  `

export default function Cards(props) {


      const { characters } = props;
      const items=characters.map((character) =>
    <div><Card name={character.name} gender={character.gender} species={character.species} image={character.image} onClose={(e)=>{props.onclose(e)}} value={character.id}/></div>);
      return <StyledCards>{items}</StyledCards>}
