export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export function addFavorite(character) {
  return { type: ADD_FAVORITE, payload: character };
}

export function deleteFavorite(id) {
  return { type: DELETE_FAVORITE, payload: id };
}

export function filterCards(genero) {
  return { type: FILTER, payload: genero };
}

export function orderCards(id) {
  return { type: ORDER, payload: id };
}
