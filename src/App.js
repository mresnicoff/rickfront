import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import { Routes, Route } from "react-router-dom";

import { connect } from "react-redux";

// import styled from 'styled-components'
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import { validateUser } from "./redux/actions";
import { signupUsers } from "./redux/actions";

export function App(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);

  const [characters, setCharacters] = useState([]);

  function login(userData) {
    props.validateUser(userData);
    if (props.user !== "") {
      navigate("/home");
    }
  }

  function signup(userData) {
    props.signupUsers(userData);
  }

  const onSearch = (character) => {
    console.log(character);
    fetch(`https://rickback-production.up.railway.app/onsearch/${character}`)
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

  useEffect(() => {
    console.log(props.user);
    if (props.user == "" || props.user == undefined) {
      navigate("/rickfront");
    } else {
      navigate("/home");
    }
  }, [access, props.user]);

  return (
    <div>
      {location.pathname !== "/" && <Navbar onSearch={onSearch} />}
      <Routes>
        <Route
          exact
          path="/rickfront"
          element={<Form login={login} signup={signup} />}
        />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    validateUser: function (userData) {
      dispatch(validateUser(userData));
    },
    signupUsers: function (userData) {
      dispatch(signupUsers(userData));
    },
  };
}
export function mapStateToProps(state) {
  return { user: state.user };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
