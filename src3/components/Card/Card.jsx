import styled from "styled-components";
import {Link} from "react-router-dom"

const Img = styled.img`
   border-radius: 50%;
   box-shadow: 2px -6px 10px #fff;
`;

const Title = styled.h1`
   color: beige;
   font-weight: bold;
`;

const Text = styled.h2`
   color: #efe;
   font-size: 1.2rem;
   font-weight: 400;
`;
const Button1 = styled.button` 
background-color: rgb(200 0 0);
font-weight:bold
`; // aqui estuvo Jorge Diaz jeje
export default function Card(props) {
   return (
      <div>
         <Button1 onClick={() => props.onClose(props.id)}>X</Button1>
         <Link to={`/detail/${props.id}`} > <Title>{props.name}</Title></Link>
        
         <Text>{props.species}</Text>
         <Text>{props.gender}</Text>
         <Img  src={props.image} alt="img not found" />
      </div>
   );
}
