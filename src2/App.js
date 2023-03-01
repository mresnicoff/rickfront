import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import styled from "styled-components";
import universo from "./components/img/universo.jpg";
const Universo = styled.div`
  background-image: url(${universo});
  background-repeat: no-repeat;
  background-size: cover;
`;
function App() {
  const [characters, setCharacters] = useState([]);
  function onClose(e) {
    console.log(typeof characters[0].id);
    console.log(typeof e.target.value);
    setCharacters((characters) =>
      characters.filter((x) => x.id !== parseInt(e.target.value))
    );
  }
  function onSearch(character) {
    fetch(
      `https://rickandmortyapi.com/api/character/${parseInt(character.input)}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  return (
    <Universo>
      <div 
        className="App"
        style={{
          textAlign: "center",
          padding: "25px",
        }}
      >
        <Nav onSearch={onSearch} />

        <div>
          <Cards
            characters={characters}
            onclose={(e) => {
              onClose(e);
            }}
          />
        </div>
      </div>
    </Universo>
  );
}

export default App;
