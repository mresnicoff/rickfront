import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const GET_FAVORITE = "GET_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const VALIDATE = "VALIDATE";

export function addFavorite(character) {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/rickandmorty/fav", character)
      .then((response) => response.data)
      .then((data) => dispatch({ type: ADD_FAVORITE, payload: data }));
  };
}

export function validateUser(user) {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/rickandmorty/users", user)
      .then((response) => response.data)
      .then((data) => dispatch({ type: VALIDATE, payload: data }));
  };
}

export function getFavorite() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/rickandmorty/fav")
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_FAVORITE, payload: data }));
  };
}

export function deleteFavorite(id) {
  return function (dispatch) {
    axios
      .delete(`http://localhost:3001/rickandmorty/fav/${id}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: DELETE_FAVORITE, payload: data }));
  };
}

export function filterCards(genero) {
  return { type: FILTER, payload: genero };
}

export function orderCards(id) {
  return { type: ORDER, payload: id };
}

// export function getStoreName(){
// return function (dispatch){
//
// .then}
//.then))}}
//}
