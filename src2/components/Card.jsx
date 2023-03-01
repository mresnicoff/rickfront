import styled from "styled-components";
const Boton= styled.button`background-color: red;`;
const Carta=styled.div`display: flex; flex-direction: column; max-height: 300px; max-width: 150px; margin:auto;`;
const Footer=styled.div`display: flex; flex-direction: row; background-color: ivory; border-bottom-left-radius: 10%; border-bottom-right-radius: 10%`
const CardHeader=styled.div`display:flex; justify-content: flex-end  ; background-color:ivory; `
const Imagen=styled.div` display:flex; align-items:flex-end; background-repeat: no-repeat;background-position: center; vertical-align: bottom; height:200px;   h2 {
   font-weight: 400;
   color: green;
   background:Yellow;
   font-size: 20PX;
 };`
export default function Card(props) {

   return (
      <Carta>
         <CardHeader><Boton value={props.value} onClick={(e)=>{props.onClose(e)}}>X</Boton></CardHeader>
         <Imagen style={{backgroundImage: "url(" + props.image + ")"}}><h2 >{props.name}</h2></Imagen>
         <Footer><h4>{props.species}  {props.gender}</h4></Footer>
        
      </Carta>
   );
}
