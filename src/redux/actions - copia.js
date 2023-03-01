import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const GET_FAVORITE = "GET_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const VALIDATE = "VALIDATE";
export const SIGNUP = "SIGNUP";

export function addFavorite(character) {
  return function (dispatch) {
    axios
      .post(`https://rickback-production.up.railway.app/fav`, character)
      .then((response) => response.data)
      .then((data) => dispatch({ type: ADD_FAVORITE, payload: data }));
  };
}

export function validateUser(user) {
  return function (dispatch) {
    axios
      .post("https://rickback-production.up.railway.app//users", user)
      .then((response) => response.data)
      .then((data) => dispatch({ type: SIGNUP, payload: data }));
  };
}

export function signupUsers(user) {
  return function (dispatch) {
    axios
      .post("https://rickback-production.up.railway.app/newusers", user)
      .then((response) => response.data)
      .then((data) => dispatch({ type: SIGNUP, payload: data }));
  };
}

export function getFavorite() {
  return function (dispatch) {
    axios
      .get("https://rickback-production.up.railway.app//fav")
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_FAVORITE, payload: data }));
  };
}

export function deleteFavorite(char1) {
  console.log(
    `https://rickback-production.up.railway.app/fav?id=${char1.id}&user=${char1.user}`
  );
  return function (dispatch) {
    axios
      .delete(
        `https://rickback-production.up.railway.app/fav?id=${char1.id}&user=${char1.user}`
      )
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
