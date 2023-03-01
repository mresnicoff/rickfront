import { useState, useEffect } from "react";

import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Form from "./components/Form/Form.jsx";
import Error from "./components/Error/Error.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import styled from "styled-components";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

const Estrellas = styled.div`
  background-image: url(https://img.freepik.com/vector-gratis/fondo-pantalla-galaxia-acuarela-pintado-mano_52683-63444.jpg?w=2000);
  backgound-size: 100%;
`;

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();




  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };


  return (
    <Estrellas>
      <div className="App" style={{ padding: "25px" }}>
        <div>
          {location.pathname != "/" ? (
            <Navbar onSearch={onSearch} />
          ) : (
            <div></div>
          )}
          <Routes>
            <Route path="/" element={<Form />} />
            <Route
              path="/home"
              element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:detailId" element={<Detail />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <div></div>
      </div>
    </Estrellas>
  );
}

export default App;
